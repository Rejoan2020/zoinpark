import React from 'react'
import ResetPass from '../components/ResetPass'
import crypto from 'crypto'
import { getToken } from '@/app/actions'; 


export default async function page({ searchParams }) {
  const { token } = await searchParams;

  const hashedToken = token ? crypto.createHash("sha256").update(token).digest("hex") : undefined;
  const storedToken = await getToken(hashedToken);
  const matched = storedToken ? true : false;
  const email = storedToken?.email;

  // if(matched){
  //   await changePass(email);
  // }
  //This change function should be called from the ResetPass component as it will need new pass value
  //from the user.

  return (
    <>
      {matched ? <ResetPass email = {email}/> : <div>Wrong token!</div>}
    </>
  )
}
