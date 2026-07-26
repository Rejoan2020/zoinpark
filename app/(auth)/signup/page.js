import SignUp from "../components/SignUp";
import React from 'react' 

export default function page({searchParams}) { 
  return (
    <SignUp referralCode = {searchParams?.ref ?? ""}/>
  )
}
