import mongoose from "mongoose";

const stakePackageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["Silver", "Gold", "Diamond"],
      required: true,
      unique: true,
    },

    minimum: {
      type: Number,
      required: true,
    },

    maximum: {
      type: Number,
      required: true,
    },

    duration: {
      type: Number, // days
      required: true,
    },

    roi: {
      type: Number, // percentage
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