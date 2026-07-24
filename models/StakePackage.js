import mongoose from "mongoose";

const stakePackageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["Silver", "Gold", "Diamond"],
      required: true,
      unique: true,
    },

    minAmount: {
      type: Number,
      required: true,
    },

    maxAmount: {
      type: Number,
      required: true,
    },

    dailyProfit: {
      type: Number,
    },

    duration: {
      type: String,
      required: true,
    },

    apy: {
      type: Number,
      required: true,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.StakePackage ||
  mongoose.model("StakePackage", stakePackageSchema);