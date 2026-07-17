import React from 'react'
import Invite from '../components/Invite'
import { auth } from '@/auth'
import User from '@/models/User';
import Wallet from '@/models/Wallet';

export default async function page() {
  const session = await auth();
  const user = await User.findOne({ email: session?.user?.email }); 
  const successfulInvites = user.successfulInvites;
  const users = await Wallet.find().sort({ balance: -1 }).limit(10).populate("user", "name image zoiid");
  console.log(users);
  // console.log(users);
  return (
    <Invite referral={user?.referralCode} users={users} successfulInvites = {successfulInvites}/>
  )
}
