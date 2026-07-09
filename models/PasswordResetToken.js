import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    email: { type: String, required: true },
    token: { type: String, required: true },
    expiresAt: {
        type: Date,
        required: true
    },
});

export default mongoose.models.PasswordResetToken || mongoose.model("PasswordResetToken", tokenSchema)