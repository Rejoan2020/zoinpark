'use server'
import User from "@/models/User";
import Wallet from "@/models/Wallet";
import StakePackage from "@/models/StakePackage";
import { auth } from "@/auth";
import UserStake from "@/models/UserStake";
import WalletTransaction from "@/models/WalletTransaction";
import userWeeklyChallenge from "@/models/userWeeklyChallenge";

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

// async function getHistory(){
//     const history = await 
// }

export { getPackages, createStake };