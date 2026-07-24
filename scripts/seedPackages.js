import StakePackage from "../models/StakePackage.js";
import mongoose from "mongoose";

const packages = [
  {
    name: "Silver",
    minAmount: 1,
    maxAmount: 3000,
    dailyProfit: 0.15,
    apy: 55,
    duration: "7 days/week",
    active: true,
  },
  {
    name: "Gold",
    minAmount: 3001,
    maxAmount: 6000,
    dailyProfit: 0.2,
    apy: 73,
    duration: "7 days/week",
    active: true,
  },
  {
    name: "Diamond",
    minAmount: 6001,
    maxAmount: 12000,
    dailyProfit: 0.25,
    apy: 91,
    duration: "7 days/week",
    active: true,
  },
];

async function seed() {
  try {
    await mongoose.connect(String('mongodb+srv://rejoan523_db_user:ceuE6DePDw68pUzd@cluster0.ekmh1po.mongodb.net/zoinpark'));

    await StakePackage.deleteMany();
    await StakePackage.insertMany(packages);

    console.log("Stake packages seeded successfully.");
  } catch (err) {
    console.error("Failed to seed stake packages:", err);
  } finally {
    process.exit();
  }
}

seed();