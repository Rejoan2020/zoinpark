import mongoose from "mongoose";

const userWeeklyChallengeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    challengeId: {
      type: String,
      required: true
    },
    lastActivity: Date,

    challenge: {
      type: String,
      required: true,
    },

    progress: {
      type: Number,
      default: 0,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    claimed: {
      type: Boolean,
      default: false,
    },

    completedAt: Date,
    claimedAt: Date,
  },
  {
    timestamps: true,
  }
);

userWeeklyChallengeSchema.index(
  { user: 1, challengeId: 1 },
  { unique: true }
);

export default mongoose.models.UserWeeklyChallenge ||
  mongoose.model("UserWeeklyChallenge", userWeeklyChallengeSchema);