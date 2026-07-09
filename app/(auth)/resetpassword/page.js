import React from 'react'
import ResetPass from '../components/ResetPass' 
import crypto from 'crypto' 
import { getToken } from '@/app/actions';


export default async function page({searchParams}) { 
  const {token} = await searchParams;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const storedToken = await getToken(hashedToken);
  const matched = hashedToken === storedToken;
  console.log(matched);
  return (
    <ResetPass />
  )
}
