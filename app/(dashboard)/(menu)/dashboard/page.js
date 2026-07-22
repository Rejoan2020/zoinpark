import React from 'react' 
import DashboardHome from './components/DashboardHome'; 
import { dbconnect } from '@/lib/mongo';
import { auth } from '@/auth';
import User from '@/models/User';
import Wallet from '@/models/Wallet';

export default async function page() {
    await dbconnect();
    const session = await auth();
    const user = await User.findOne({email:session?.user?.email}); 
    const wallet = await Wallet.findOne({user:user._id});
    return (
        <DashboardHome wallet = {wallet}/>
    )
}
