"use server";
import User from "@/models/User";
import Ticket from "@/models/Ticket";
import { auth } from "@/auth";

export async function createTicket(formData) {
    const category = formData.get('category');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const session = await auth();
    const userEmail = session?.user?.email;
    if (!userEmail) {
        throw new Error("Unauthorized");
    }
    const user = await User.findOne({ email: userEmail });
    if (!user) {
        throw new Error("User not found");
    }

    await Ticket.create({
        user: user._id,
        subject,
        message,
        category,
        status: 'open',
    })

    return {
        success: true,
        message: "Successfully created the event.",
    };

}

export async function getTickets() {
    const session = await auth();
    const userEmail = session?.user?.email;
    if (!userEmail) {
        throw new Error("Unauthorized");
    }
    const user = await User.findOne({ email: userEmail });
    if (!user) {
        throw new Error("User not found");
    }

    const tickets = await Ticket.find({ user: user._id }).lean();

    const leanTickets = tickets.map((ticket) => {
        return {
            ...ticket, _id: ticket._id.toString(),
            user: ticket.user.toString(),
            createdAt: ticket.createdAt.toString(),
            updatedAt: ticket.updatedAt.toString()
        }
    })
 

    return leanTickets.reverse();
}