import React from 'react' 
import DashboardHome from './components/DashboardHome'; 
import { dbconnect } from '@/lib/mongo';
import { auth } from '@/auth';
import User from '@/models/User';
import Wallet from '@/models/Wallet';

export default async function page() {
    await dbconnect();
    const session = await auth();
    const user = await User.findOne({user:session?.user._id});
    const wallet = await Wallet.findOne({user:user._id})

    console.log(user);
    console.log(wallet);
    return (
        <DashboardHome wallet = {wallet}/>
    )
}
