import { Inter } from "next/font/google";
import "./globals.css";
import { dbconnect } from "@/lib/mongo.js";
import userWeeklyChallenge from "@/models/userWeeklyChallenge";
import { updateDailyCheckIn, updateDaysCheckIn } from "./actions/challenges";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  title: "Zoin Park",
  description: "Cryptocurrency and NFT marketplace",
};

export default async function RootLayout({ children }) {
  const conn = await dbconnect();

  const dailyCheckIn = await userWeeklyChallenge.findOne({ challengeId: 'daily-checkin' });
  const fiveDaysCheckIn = await userWeeklyChallenge.findOne({challengeId: 'visit-5'});
  // console.log(dailyCheckIn);
  await updateDailyCheckIn(dailyCheckIn);
  await updateDaysCheckIn(fiveDaysCheckIn, 5);

  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body className="min-h-full flex flex-col gradientbg2">
        {children}
      </body>
    </html>
  );
}
