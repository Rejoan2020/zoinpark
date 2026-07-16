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

export async function signInWithGoogle() {
  await signIn("google", {
    redirectTo: "/dashboard",
  });
}

export async function logIn(initailState, formData) {
  const email = formData.get('email');
  const pass = formData.get('password');

  console.log(email, pass)
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

  if (user) {
    if (!!user.password) {
      throw new Error("An account with this email already exists.");
    }
    const hashedPass = await bcrypt.hash(pass, 12);
    user.name = user.name || name;
    user.password = hashedPass;
    user.address='';
    user.country='';
    user.state='';
    user.city='';
    user.zipcode='';
    user.phone='';
    user.zoiid= generateZoiId();
    user.referralCode= generateReferralCode();
    user.referredBy='';
    user.rank='';
    user.successfulInvites='';
    user.createdAt='';
    user.updatedAt='';

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
    address:'',
    country:'',
    state:'',
    city:'',
    zipcode:'',
    phone:'',
    zoiid: generateZoiId(),
    referralCode: generateReferralCode(),
    referredBy:'',
    rank:'',
    successfulInvites:'',
    createdAt:'',
    updatedAt:''
  });
  
  await Wallet.create({
    user: newUser._id
  })
  
  await signIn('credentials', {
    email: email,
    password: pass,
    redirectTo: "/signin",
  })
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
  console.log("user : xxxxxxxxxxxxxxx :", email, user, newPass);
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