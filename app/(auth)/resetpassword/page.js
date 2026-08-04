import React from 'react'
import ResetPass from '../components/ResetPass'
import crypto from 'crypto'
import { getToken } from '@/app/actions';
import { dbconnect } from '@/lib/mongo';

export default async function page({ searchParams }) { 
  await dbconnect();
  const { token } = await searchParams;

  const hashedToken = token ? crypto.createHash("sha256").update(token).digest("hex") : undefined;
  const storedToken = await getToken(hashedToken);
  const matched = storedToken ? true : false;
  const email = storedToken?.email;
 

  return (
    <>
      {matched ? <ResetPass email={email} /> : <div>Wrong token!</div>}
    </>
  )
}
