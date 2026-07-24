
import Event from "../models/Event.js";

const events = [
    {
        title: "ZoinPark Community AMA",
        description:
            "Meet the ZoinPark team live, ask questions about upcoming features, staking, and the roadmap.",
        image: "/events/ama.png",
        location: "Online (Zoom)",
        eventDate: new Date("2026-07-25T19:30:00"),
        registrationLink: "https://zoom.us/example",
    },

    {
        title: "Crypto Beginners Workshop",
        description:
            "Learn the basics of blockchain, wallets, staking, and how to safely manage your digital assets.",
        image: "/events/cryptos.png",
        location: "Dhaka Innovation Hub",
        eventDate: new Date("2026-07-27T15:00:00"),
        registrationLink: "https://forms.gle/example",
    },

    {
        title: "Web3 Networking Meetup",
        description:
            "Connect with developers, investors, and blockchain enthusiasts while exploring the latest Web3 projects.",
        image: "/events/meetup.png",
        location: "Gulshan, Dhaka",
        eventDate: new Date("2026-07-30T18:00:00"),
        registrationLink: "https://example.com/register",
    },

    {
        title: "Staking Masterclass",
        description:
            "Discover staking strategies, risk management, and how to maximize your ZOINS rewards.",
        image: "/events/staking.png",
        location: "Online",
        eventDate: new Date("2026-08-02T20:00:00"),
        registrationLink: "https://meet.google.com/example",
    },

    {
        title: "Traders Festival",
        description:
            "Participate in this month's community challenge and compete for exclusive ZOINS rewards.",
        image: "/events/trader.png",
        location: "Dhaka",
        eventDate: new Date("2026-08-05T19:00:00"),
        registrationLink: "https://example.com/festival",
    },

    {
        title: "Product Roadmap Live Session",
        description:
            "Get an exclusive preview of upcoming ZoinPark features and share your feedback with the development team.",
        image: "/events/roadmap.png",
        location: "YouTube Live",
        eventDate: new Date("2026-08-09T19:30:00"),
        registrationLink: "https://youtube.com/example",
    },
];

async function seed() {
    try {
        await mongoose.connect(String('mongodb+srv://rejoan523_db_user:ceuE6DePDw68pUzd@cluster0.ekmh1po.mongodb.net/zoinpark'));

        await Event.deleteMany();
        await Event.insertMany(events);

        console.log("Events seeded successfully");
    } catch (err) {
        console.error("Failed to seed events:", err);
    } finally {
        process.exit();
    }
}

seed();