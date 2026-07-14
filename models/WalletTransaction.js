import mongoose from "mongoose";

const walletTransactionSchema = new mongoose.Schema(
    {
        wallet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wallet",
            required: true,
            index: true,
        },

        type: {
            type: String,
            enum: ["credit", "debit"],
            required: true,
        },

        source: {
            type: String,
            enum: [
                "staking",
                "invite",
                "challenge",
                "admin",
                "withdraw",
                "deposit",
            ],
            required: true,
        },

        amount: {
            type: Number,
            required: true,
            min: 0,
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },
        status: {
            type: String,
            enum: ["pending", "completed", "failed", "cancelled"],
            default: "completed",
        },

        referenceId: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
        },
    },
    {
        timestamps: true,
    },

);

export default mongoose.models.WalletTransaction ||
    mongoose.model("WalletTransaction", walletTransactionSchema);