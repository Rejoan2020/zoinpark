import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import User from '@/models/User';
import { dbconnect } from '@/lib/mongo';
import { updateDailyCheckIn, updateDaysCheckIn } from '../actions/challenges';
import userWeeklyChallenge from '@/models/userWeeklyChallenge'; 

export default async function layout({ children }) {
  await dbconnect();

  const session = await auth();
  const user = await User.findOne({ email: session?.user?.email }).lean();
  if (user) user._id = user._id.toString();

  const dailyCheckIn = await userWeeklyChallenge.findOne({ user: user._id, challengeId: 'daily-checkin' });
  const fiveDaysCheckIn = await userWeeklyChallenge.findOne({ user: user._id, challengeId: 'visit-5' });
  const sevenDaysCheckIn = await userWeeklyChallenge.findOne({ user: user._id, challengeId: 'visit-7' });

  if (dailyCheckIn) await updateDailyCheckIn(dailyCheckIn);
  if (fiveDaysCheckIn) await updateDaysCheckIn(fiveDaysCheckIn, 5);
  if (sevenDaysCheckIn) await updateDaysCheckIn(sevenDaysCheckIn, 7);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header user={user} />
        <main className="flex-1 bg-background">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
