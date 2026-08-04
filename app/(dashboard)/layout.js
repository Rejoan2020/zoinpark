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
import Notification from '@/models/Notification';
import MobileFooter from '../components/MobileFooter';

export default async function layout({ children }) {
  await dbconnect();

  const session = await auth();
  const user = await User.findOne({ email: session?.user?.email }).lean();
  if (user) user._id = user._id.toString();

  const dailyCheckIn = await userWeeklyChallenge.findOne({ user: user?._id, challengeId: 'daily-checkin' });
  const fiveDaysCheckIn = await userWeeklyChallenge.findOne({ user: user?._id, challengeId: 'visit-5' });
  const sevenDaysCheckIn = await userWeeklyChallenge.findOne({ user: user?._id, challengeId: 'visit-7' });

  if (dailyCheckIn) await updateDailyCheckIn(dailyCheckIn);
  if (fiveDaysCheckIn) await updateDaysCheckIn(fiveDaysCheckIn, 5);
  if (sevenDaysCheckIn) await updateDaysCheckIn(sevenDaysCheckIn, 7);

  if (!session) {
    redirect("/signin");
  }

  const unread = await Notification.countDocuments({
    user: user._id,
    read: false,
  });

  const notifications = await Notification.find({ user: user._id }).lean();
  const leanNotifications = notifications.map(notification => {
    return {
      ...notification, _id: notification._id.toString(), user: notification.user.toString(),
      createdAt: notification.createdAt.toString(), updatedAt: notification.updatedAt.toString()
    }
  })

  return (
    <div className="flex min-h-screen bg-background">
      <div className='hidden lg:block border-r border-zinc-800'>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header user={user} unread={unread} notifications={leanNotifications} />
        <main className="flex-1 max-lg:pb-20">
          {children}
        </main>
        <div className='max-lg:hidden'>
          <Footer />
        </div> 
        <div className='lg:hidden h-20 border-t border-zinc-800 grid grid-cols-4 fixed bottom-0 left-0 right-0 bg-background'>
            <MobileFooter/>
        </div>
      </div>
    </div>
  )
}
