import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    image: String,
    emailVerified: String,

    name: String,
    address: String,
    country: String,
    state: String,
    city: String,
    zipcode: String,
    phone: String,

    zoiid: String,
    referralCode: String,
    referredBy: String,

    rank:String,

    successfulInvites: Number,

    createdAt: Date,
    updatedAt: Date
    
})

export default mongoose.models.User || mongoose.model("User", userSchema);