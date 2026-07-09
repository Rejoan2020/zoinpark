import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { auth } from '@/auth';

export default async function layout({children}) {
  const session = await auth();
  console.log("session:    ",session)
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
