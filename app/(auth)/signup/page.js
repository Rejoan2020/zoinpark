import SignUp from "../components/SignUp";
import React from 'react'
import { dbconnect } from "@/lib/mongo";

export default async function page({ searchParams }) {
  await dbconnect();
  const searchParam = await searchParams;
  return (
    <SignUp referralCode={searchParam?.ref ?? ""} />
  )
}
