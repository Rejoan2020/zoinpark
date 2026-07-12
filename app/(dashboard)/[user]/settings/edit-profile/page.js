import React from 'react'
import EditProfile from '../components/EditProfile'
import { auth } from '@/auth';
import User from '@/models/User';

export default async function page() {
    const session = await auth(); 
    const user = await User.findOne({email : session.user.email}).lean();
    user._id = user._id.toString();
  return (
    <EditProfile user = {user}/>
  )
}
