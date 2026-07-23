'use server'

import User from "@/models/User";
import Wallet from "@/models/Wallet";
import WalletTransaction from "@/models/WalletTransaction";
import { differenceInCalendarDays } from "date-fns";
import { auth } from "@/auth";
import userWeeklyChallenge from "@/models/userWeeklyChallenge";

export async function updateDailyCheckIn(dailyCheckIn) {
    if (!dailyCheckIn.lastActivity && !dailyCheckIn.claimed) {
        dailyCheckIn.lastActivity = new Date();
        dailyCheckIn.progress = 1;
        dailyCheckIn.completed = true;
        dailyCheckIn.completedAt = new Date();
        await dailyCheckIn.save();
        return;
    }
    const last = new Date(dailyCheckIn.lastActivity);
    const today = new Date();

    const isSameDay =
        last.getFullYear() === today.getFullYear() &&
        last.getMonth() === today.getMonth() &&
        last.getDate() === today.getDate();

    if (!isSameDay) {
        dailyCheckIn.lastActivity = today;
        dailyCheckIn.progress = 1;
        dailyCheckIn.completed = true;
        dailyCheckIn.completedAt = today;
        dailyCheckIn.claimed = false;

        await dailyCheckIn.save();
    }
}

export async function claimRewardForDailyCheckIn(id, amount) {
    const session = await auth();
    const user = await User.findOne({ email: session.user.email });
    if (!session?.user?.email) {
        throw new Error("Unauthorized");
    }
    if (!user) {
        throw new Error("User not found");
    }
    const wallet = await Wallet.findOne({ user: user.id });

    if (!wallet) {
        throw new Error("Wallet not found");
    }

    const challenge = await userWeeklyChallenge.findOne({
        user: user._id,
        challengeId: id,
    });
    if (!challenge) throw new Error("Challenge not found");
    if (challenge.claimed) {
        throw new Error("Reward already claimed");
    }
    if (!challenge.completed) {
        throw new Error("Challenge not completed");
    }
    try {
        const creditTransaction = await WalletTransaction.create({
            wallet: wallet._id,
            type: "credit",
            source: "challenge",
            amount: amount,
            description: `${challenge.challengeId} completed!`,
            status: "completed",
        })
    }
    catch (err) {
        console.log(err)
        throw err;
    }

    challenge.claimed = true;
    challenge.claimedAt = new Date();
    challenge.progress = 0;
    
    wallet.balance += amount;
    wallet.totalCredit += amount;

    await wallet.save();
    await challenge.save();
}

export async function updateDaysCheckIn(challenge, days) {
    if (!challenge.lastActivity) {
        challenge.progress = 1;
        challenge.lastActivity = new Date();
        await challenge.save();
        return;
    }
    const dayDiff = differenceInCalendarDays(new Date(), challenge.lastActivity);
    if (dayDiff == 0) {
        return;
    }
    else if (dayDiff == 1) {
        challenge.progress++;
        challenge.lastActivity = new Date();
    }
    else if (dayDiff > 1) {
        challenge.progress = 1;
        challenge.lastActivity = new Date();
    }
    if (challenge.progress >= days && !challenge.completed) {
        challenge.lastActivity = new Date();
        // challenge.claimed = false;
        challenge.completed = true;
        challenge.completedAt = new Date();
    }
    await challenge.save();
}
