import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    zoiid: String,
    name: String,
    address: String,
    country: String,
    state: String,
    city: String,
    zipcode: String,
    phone: String,
    password: String,
    email: { type: String, required: true, unique: true },
    image: String,
})

export default mongoose.models.User || mongoose.model("User", userSchema);