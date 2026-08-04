import SignUp from "../components/SignUp";
import React from 'react'

export default async function page({ searchParams }) {
  await dbconnect();
  const searchParam = await searchParams;
  return (
    <SignUp referralCode={searchParam?.ref ?? ""} />
  )
}
