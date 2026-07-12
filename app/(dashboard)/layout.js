import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import User from '@/models/User';

export default async function layout({children}) {
  const session = await auth(); 
  const user = await User.findOne({email : session.user.email}).lean();
  user._id = user._id.toString();
  
  if (!session) {
    redirect("/signin");
  }
  return (
    <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header user={user}/>
            <main className="flex-1 bg-background">
              {children}
            </main>
            <Footer />
          </div>
        </div>
  )
}
