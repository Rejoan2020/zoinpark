import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    subject: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})

const announcement = mongoose.models.Announcement ||
    mongoose.model('Announcement', announcementSchema);

export default announcement;