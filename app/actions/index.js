"use server";

import { signIn, signOut } from "@/auth";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function signInWithGoogle() {
  await signIn("google", {
    redirectTo: "/dashboard",
  });
}

export async function logIn(formData) {
  const email = formData.get('email');
  const pass = formData.get('password');

  await signIn("credentials", {
    email: email,
    password: pass,
    redirectTo: "/dashboard"
  });
}

export async function signOutWithGoogle() {
  await signOut({
    redirectTo: "/signin",
  });
}

export async function signUp(formData) {
  console.log(formData);
  const name = formData.get("name");
  const email = formData.get("email");
  const pass = formData.get("password");
  const user = await User.findOne({ email: email })

  console.log("user: ", user)

  if (user) {
    if (!!user.password) {
      throw new Error("An account with this email already exists.");
    }
    const hashedPass = await bcrypt.hash(pass, 12);
    user.name = user.name || name;
    user.pass = hashedPass;

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

  await User.create({
    name,
    email,
    password: hashedPassword,
    image: "",
    emailVerified: null,
  });
  await signIn('credentials', {
    email: email,
    password: pass,
    redirectTo: "/signin",
  })
}