import { auth } from "@/auth";
import announcement from "@/models/Announcement";
import User from "@/models/User";

export async function getAnnouncements(){
    const session = await auth();
    const email = session?.user?.email;
    if(!email)
        throw new Error("Unauthorized");

    const user = await User.find({email});

    if(!user) throw new Error("Email not found!");

    // announcement.create({
    //     user: user._id,
    //     subject: "Testing announcement2",
    //     details: "lorem ipsumd lorem ipsum",
    //     createdAt: new Date()
    // })

    return (await announcement.find({id: user._id}).lean()).reverse();
}