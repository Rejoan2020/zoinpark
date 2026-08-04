import { auth } from "@/auth";
import { dbconnect } from "@/lib/mongo";
import announcement from "@/models/Announcement";
import User from "@/models/User";

export async function getAnnouncements(){
    await dbconnect();
    const session = await auth();
    const email = session?.user?.email;
    if(!email)
        throw new Error("Unauthorized");

    const user = await User.find({email});

    if(!user) throw new Error("Email not found!");

    return (await announcement.find({id: user._id}).lean()).reverse();
}