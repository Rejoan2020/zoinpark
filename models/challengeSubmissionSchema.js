import mongoose from "mongoose";

const challengeSubmissionSchema = new mongoose.Schema(
  {
    challenge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Challenge",
      required: true,
      index: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    proof: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    rewardGiven: {
      type: Boolean,
      default: false,
    },

    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Admin who reviewed it
      default: null,
    },

    reviewedAt: {
      type: Date,
      default: null,
    },

    rejectionReason: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
 

export default mongoose.models.ChallengeSubmission ||
  mongoose.model("ChallengeSubmission", challengeSubmissionSchema);