"use server";

import { signIn, signOut } from "@/auth";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import PasswordResetToken from "@/models/PasswordResetToken";
import resend from "@/lib/mail";
import { createHash, randomUUID } from "node:crypto";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { auth } from "@/auth";
import { dbconnect } from "@/lib/mongo";
import Wallet from "@/models/Wallet";
import { generateZoiId } from "@/utils/generateZoiId";
import { generateReferralCode } from "@/utils/generateReferralCode";
import userWeeklyChallenge from "@/models/userWeeklyChallenge";
import WalletTransaction from "@/models/WalletTransaction";
import Event from "@/models/Event";
import EventRegistration from "@/models/EventRegistration";

export async function signInWithGoogle() {
  await signIn("google", {
    redirectTo: "/dashboard",
  });
}

export async function logIn(initailState, formData) {
  const email = formData.get('email');
  const pass = formData.get('password');

  // console.log(email, pass)
  try {
    await signIn("credentials", {
      email: email,
      password: pass,
      redirectTo: `${String(process.env.NEXTAUTH_URL)}/dashboard`
    });
  } catch (err) {
    if (err instanceof AuthError) {
      return {
        error: "Invalid email or password",
      };
    }
    throw err;
  }

}

export async function signOutWithGoogle() {
  await signOut({
    redirectTo: `${String(process.env.NEXTAUTH_URL)}/signin`,
  });
}

export async function signUp(formData) {
  await dbconnect();
  const name = formData.get("name");
  const email = formData.get("email");
  const pass = formData.get("password");
  const user = await User.findOne({ email: email })
  const ref = formData.get('referral')

  if (user) {
    if (!!user.password) {
      throw new Error("An account with this email already exists.");
    }
    const hashedPass = await bcrypt.hash(pass, 12);
    user.name = user.name || name;
    user.password = hashedPass;
    user.address = '';
    user.country = '';
    user.state = '';
    user.city = '';
    user.zipcode = '';
    user.phone = '';
    user.zoiid = generateZoiId();
    user.referralCode = generateReferralCode();
    user.referredBy = ref;
    user.rank = '';
    user.successfulInvites = 0;
    user.createdAt = '';
    user.updatedAt = '';

    await user.save();

    // await logIn(formData);
    await signIn('credentials', {
      email: email,
      password: pass,
      redirectTo: "/signin",
    })

    return;
  }

  const hashedPassword = await bcrypt.hash(pass, 12);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    image: "",
    emailVerified: null,
    address: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    phone: '',
    zoiid: generateZoiId(),
    referralCode: generateReferralCode(),
    referredBy: ref,
    rank: '',
    successfulInvites: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  await Wallet.create({
    user: newUser._id
  })

  const inviter = await User.findOne({
    referralCode: ref,
  });

  if (inviter) {
    inviter.successfulInvites += 1;
    const challenge = await userWeeklyChallenge.findOne({
      user: inviter._id,
      challengeId: 'refer-1',
    });
    const wallet = await Wallet.findOne({ user: inviter.id });

    if (!wallet) {
      throw new Error("Wallet not found");
    }

    if (!challenge.completed && !challenge.claimed) {
      try {
        const creditTransaction = await WalletTransaction.create({
          wallet: wallet._id,
          type: "credit",
          source: "challenge",
          amount: 20,
          description: "Refer one friend in a week",
          status: "completed",
        })
      }
      catch (err) {
        console.log(err);
        throw err;
      }
      challenge.completed = true;
      challenge.progress = 1;
      challenge.lastActivity = new Date();
      challenge.completedAt = new Date();
      challenge.save();
    }

    await inviter.save();
  }

  await createUserWeeklyChallenge(newUser);

  await signIn('credentials', {
    email: email,
    password: pass,
    redirectTo: "/signin",
  })
}

export async function createUserWeeklyChallenge(newUser) {
  const challenges = [
    {
      id: "stake-100",
      title: "Stake at least 100 ZOINS this week",
    },
    {
      id: "community-event",
      title: "Join this week's community event",
    },
    {
      id: "refer-1",
      title: "Refer 1 friend this week",
    },
    {
      id: "daily-checkin",
      title: "Daily check-in",
    },
    {
      id: "visit-5",
      title: "Visit ZoinPark for 5 consecutive days",
    },
    {
      id: "visit-7",
      title: "Visit ZoinPark for 7 consecutive days",
    },
  ];
  const docs = challenges.map((challenge) => ({
    user: newUser._id,
    challengeId: challenge.id,
    lastActivity: null,
    challenge: challenge.title,
    progress: 0,
    completed: false,
    claimed: false,
    completedAt: null,
    claimedAt: null,
  }));
  // console.log(docs);
  await userWeeklyChallenge.insertMany(docs);
}

export async function updateProfile(formData) {
  await dbconnect();
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const updateData = {
    zoiid: formData.get("zoiid"),
    name: formData.get("name"),
    address: formData.get("address"),
    country: formData.get("country"),
    state: formData.get("state"),
    city: formData.get("city"),
    zipcode: formData.get("zipcode"),
    phone: formData.get("phone"),
  };

  Object.keys(updateData).forEach((key) => {
    if (
      updateData[key] === null ||
      updateData[key] === undefined ||
      updateData[key] === ""
    ) {
      delete updateData[key];
    }
  });
  console.log(updateData)
  const user = await User.findOneAndUpdate(
    { email: session.user.email },
    { $set: updateData }
  );

  console.log(user)
}

export async function sendOTP(formData) {
  const email = formData.get("email");
  const user = await User.findOne({ email });

  if (!!user) {
    try {
      await PasswordResetToken.deleteMany({ email });
      const token = randomUUID();
      const hashedToken = createHash("sha256").update(token).digest("hex");
      await PasswordResetToken.create({
        email,
        token: hashedToken,
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
      });

      await resend.emails.send({
        from: "ZoinPark <onboarding@resend.dev>",
        to: email,
        subject: "Reset your password",
        html: `<h2>Reset Password</h2>
        <p>Click the link below:</p>

        <a href="${process.env.NEXTAUTH_URL}/resetpassword?token=${token}">
          Reset Password
        </a>`,
      });
    } catch (err) {
      console.log(err)
    }
  }
  const message = "If an account with that email exists, we've sent a password reset link."
  return message;
}

export async function getToken(hashedToken) {
  const token = await PasswordResetToken.findOne({ token: hashedToken });
  if (!token) throw new Error("Invalid reset link");
  if (token.expiresAt < new Date()) throw new Error("Reset link has expired");
  return token;
}

export async function changePass(email, newPass) {
  const user = await User.findOne({ email });
  const hashedPass = await bcrypt.hash(newPass, 12);
  user.password = hashedPass;
  user.save();

}

export async function resetPassword(formData) {
  const newPass = formData.get('newPass');
  const retypedNewPass = formData.get('retypedNewPass');
  const email = formData.get('email');
  if (newPass === retypedNewPass) {
    await changePass(email, newPass);
    console.log('Password changed!')
    redirect(`${String(process.env.NEXTAUTH_URL)}/signin`)
  }
  throw new error("Paswords are not same!")
}

export async function inviteByEmail(initailState, formData) {
  await dbconnect();

  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const email = formData.get("email");

  const user = await User.findOne({ email: session.user.email });

  const referralLink = `${process.env.NEXTAUTH_URL}/signup?ref=${user.referralCode}`;
  console.log(referralLink);
  const { data, error } = await resend.emails.send({
    from: "ZoinPark <onboarding@resend.dev>",
    to: email,
    subject: "You've been invited to join ZoinPark!",
    html: `
      <h2>You've been invited to ZoinPark</h2>

      <p>Your friend invited you to join ZoinPark.</p>

      <p>
        <a href="${referralLink}">
          Join ZoinPark
        </a>
      </p>

      <p>Or copy this link:</p>

      <p>${referralLink}</p>
    `,
  });
  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Invitation sent successfully!",
  };
}

export async function registerForEvent(eventId) {
  await dbconnect();

  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user = await User.findOne({
    email: session.user.email,
  });

  if (!user) {
    throw new Error("User not found");
  }

  const event = await Event.findById(eventId);

  if (!event) {
    throw new Error("Event not found");
  }

  const exists = await EventRegistration.findOne({
    user: user._id,
    event: event._id,
  });

  if (exists) {
    throw new Error("You have already registered for this event.");
  }

  await EventRegistration.create({
    user: user._id,
    event: event._id,
  });

  const eventDate = new Date(event.eventDate);

  await resend.emails.send({
    from: "ZoinPark <onboarding@resend.dev>",
    to: 'rejoan523@gmail.com',
    subject: `Registration Confirmed - ${event.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
        <h2>You're Registered!</h2>

        <p>Hi <strong>${user.name}</strong>,</p>

        <p>Thank you for registering for the following ZoinPark event:</p>

        <hr />

        <h3>${event.title}</h3>

        <p>${event.description}</p>

        <p>
          <strong>📅 Date:</strong>
          ${eventDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}
        </p>

        <p>
          <strong>🕒 Time:</strong>
          ${eventDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })}
        </p>

        <p>
          <strong>📍 Location:</strong>
          ${event.location}
        </p>

        <p style="margin-top:20px;">
          <a
            href="${event.registrationLink}"
            style="
              background:#16a34a;
              color:white;
              padding:12px 20px;
              text-decoration:none;
              border-radius:6px;
              display:inline-block;
            "
          >
            Join Event
          </a>
        </p>

        <p style="margin-top:20px;">
          Or use this link:
        </p>

        <p>${event.registrationLink}</p>

        <hr />

        <p>We look forward to seeing you!</p>

        <p><strong>Team ZoinPark</strong></p>
      </div>
    `,
  });
  const challenge = await userWeeklyChallenge.findOne({
    user: user._id,
    challengeId: 'community-event'
  })
  if (!challenge) throw new Error("Challenge not found!");
  if (!challenge.claimed) {
    challenge.completed = true;
    challenge.progress = 1;
    challenge.completedAt = new Date();
    challenge.lastActivity = new Date();
    challenge.save();
  }

  return {
    success: true,
    message: "Successfully registered for the event.",
  };
}

export async function isRegistered(eventId) {
  await dbconnect();

  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user = await User.findOne({
    email: session.user.email,
  });

  if (!user) {
    throw new Error("User not found");
  }

  const event = await Event.findById(eventId);

  if (!event) {
    throw new Error("Event not found");
  }

  const exists = await EventRegistration.findOne({
    user: user._id,
    event: event._id,
  });

  if (exists) {
    return true;
  }
  else return false;
}