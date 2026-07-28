import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ['Account',
        'Wallet',
        'Deposits & Withdrawals',
        'Staking',
        'Referral Program',
        'Rewards & Challenges',
        'Bug Report',
        'Technical Issue',
        'Other'],
    },

    status: {
      type: String,
      enum: ["open", "pending", "resolved", "closed"],
      default: "open",
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    responseDate: {
      type: Date,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Ticket ||
  mongoose.model("Ticket", ticketSchema);