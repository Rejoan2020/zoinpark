import React from 'react'
import { auth } from '@/auth'
import Profile from '../components/Profile';
import User from '@/models/User';
import { dbconnect } from '@/lib/mongo';

export default async function page() {
  await dbconnect();

  const session = await auth();

  const user = await User.findOne({
    email: session.user.email,
  }).lean();

  return (
    <Profile user={user} />
  )
}
