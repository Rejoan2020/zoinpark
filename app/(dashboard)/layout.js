import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function layout({children}) {
  const session = await auth(); 
  if (!session) {
    redirect("/signin");
  }
  return (
    <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header session={session}/>
            <main className="flex-1 bg-background">
              {children}
            </main>
            <Footer />
          </div>
        </div>
  )
}
