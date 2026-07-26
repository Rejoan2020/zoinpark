import SignUp from "../components/SignUp";
import React from 'react'
import { useSearchParams } from "next/navigation";

export default function page() {
  const params = useSearchParams();
  return (
    <SignUp params = {params}/>
  )
}
