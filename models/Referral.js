import mongoose from "mongoose";

const referralSchema = new mongoose.Schema({
    inviter:{
        type: String,
        required: true,
    },
    invitedUser:{
        type: String,
        required: true,
    },
    reward:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum:["pending","successful"],
        required: true
    },
    createdAt: Date,
})

export default mongoose.models.Referral ||
    mongoose.model("Referral", referralSchema);