'use server'
import User from "@/models/User";
import Wallet from "@/models/Wallet";
import StakePackage from "@/models/StakePackage";
import { auth } from "@/auth";
import UserStake from "@/models/UserStake";
import WalletTransaction from "@/models/WalletTransaction";
import userWeeklyChallenge from "@/models/userWeeklyChallenge";
import { differenceInCalendarDays } from "date-fns";

async function getPackages() {
    const packages = await StakePackage.find().lean();
    return packages.map((pkg) => ({
        ...pkg,
        _id: pkg._id.toString(),
        createdAt: pkg.createdAt.toISOString(),
        updatedAt: pkg.updatedAt.toISOString(),
    }));
}

async function createStake(packageId, amount, paymentMode) {
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
    const pkg = await StakePackage.findById(packageId);

    if (!pkg)
        throw new Error("Package not found");

    if (amount < pkg.minimum)
        throw new Error("Minimum amount not reached");

    if (amount > pkg.maximum)
        throw new Error("Maximum amount exceeded");

    if (!["ZOIN", "USDT", "TAKA"].includes(paymentMode))
        throw new Error("Invalid payment mode");

    if (wallet.balance < amount) throw new Error("Insufficient balance !");
    const startDate = new Date();

    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    try {
        wallet.balance -= amount;
        await wallet.save();
        await UserStake.create({
            user: user._id,
            package: pkg._id,
            amount,
            dailyProfit: pkg.dailyProfit,
            apy: pkg.apy,
            startDate,
            endDate,
            status: "active",

        });

        await WalletTransaction.create({
            wallet: wallet._id,

            type: "debit",

            source: "staking",

            amount,

            description: `Staked ${amount} ZOIN`,

            status: "completed",
        });

        const challenge = await userWeeklyChallenge.findOne({
            user: user._id,
            challengeId: 'stake-100',
        });
        if (!challenge) throw new Error("Challenge not found");
        if (challenge.claimed) {
            throw new Error("Reward already claimed");
        }

        challenge.progress += amount;
        if (challenge.progress >= 100) {
            challenge.completed = true;
            challenge.completedAt = new Date();
        }

        await challenge.save();

    } catch (err) {
        throw err;
    }


}

async function getUserStakes() {
    const session = await auth();

    const user = await User.findOne({
        email: session.user.email,
    });
    const history = await UserStake.find({ user: user._id }).lean();
    return history;
}

async function withdraw(stakeId) {
    const stake = await UserStake.findById(stakeId);

    if (!stake)
        throw new Error("Stake not found");

    if (stake.status === 'completed') throw new Error("This is no longer active!")

    const session = await auth();

    const user = await User.findOne({
        email: session.user.email,
    });

    if (!stake.user.equals(user._id))
        throw new Error("Unauthorized");

    const effectiveEnd = new Date() > stake.endDate ? stake.endDate : new Date();
    const daysPassed = differenceInCalendarDays(effectiveEnd, stake.startDate);

    const totalReward = stake.amount * (stake.dailyProfit / 100) * daysPassed;
    let withdrawable = totalReward - Number(stake.claimedRewards);
    console.log(withdrawable);
    if (withdrawable <= 0)
        throw new Error("No rewards available.");

    const wallet = await Wallet.findOne({
        user: user._id,
    });

    if (new Date() > stake.endDate) {
        stake.status = 'completed';
        withdrawable += Number(stake.amount);
    }

    wallet.balance += withdrawable;

    stake.updatedAt = new Date();
    stake.claimedRewards += withdrawable;
    await stake.save();

    try {
        const creditTransaction = await WalletTransaction.create({
            wallet: wallet._id,
            type: "credit",
            source: "staking",
            amount: withdrawable,
            description: 'Staking bonus!',
            status: "completed",
        })
    }
    catch (err) {
        throw err;
    }

    await wallet.save();
    return {
        success: true,
        amount: withdrawable,
    };
}

async function getTotalStakes() {
    const session = await auth();

    const user = await User.findOne({
        email: session.user.email,
    });
    const stakes = await UserStake.find({user: user._id});
    const totalStaking = stakes.reduce(
        (sum, stake) => sum + stake.amount,
        0
    );
    return totalStaking;
}

async function getTotalDebitCredits() {
    const session = await auth();

    const user = await User.findOne({
        email: session.user.email,
    });

    const wallet = await Wallet.findOne({ user: user._id });

    const transactions = await WalletTransaction.find({
        wallet: wallet._id,
        status: "completed",
    });

    const totalCredit = transactions
        .filter(t => t.type === "credit")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalDebit = transactions
        .filter(t => t.type === "debit")
        .reduce((sum, t) => sum + t.amount, 0);

    return [totalDebit, totalCredit];
}

export { getPackages, createStake, getUserStakes, withdraw, getTotalStakes, getTotalDebitCredits };