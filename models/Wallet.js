import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  balance: {
    type: Number,
    default: 0,
  },

  totalCredit: {
    type: Number,
    default: 0,
  },

  totalDebit: {
    type: Number,
    default: 0,
  },

  totalStaked: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.models.Wallet || mongoose.model("Wallet", walletSchema);
