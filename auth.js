import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/client";
import Credentials from "next-auth/providers/credentials";
import User from "./models/User";
import bcrypt from "bcryptjs";
import { dbconnect } from "./lib/mongo";
import { generateZoiId } from "./utils/generateZoiId";
import { generateReferralCode } from "./utils/generateReferralCode";
import Wallet from "./models/Wallet";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email"
        },
        password: {
          label: "password",
          type: "password"
        },
      },
      async authorize(credentials) {
        await dbconnect();
        const user = await User.findOne({
          email: credentials.email,
        });
        console.log("Cred: ", credentials)
        if (!user) {
          return null;
        }

        const match = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!match) {
          return null;
        }
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
        };
      }
    })],
  callbacks: {
    async signIn() {
      return true;
    }
  },
  events: {
    async createUser({ user }) {
      await dbconnect();

      await User.findByIdAndUpdate(user.id, {
        $set: {
          zoiid: generateZoiId(),
          referralCode: generateReferralCode(),
          image: user.image,
          address: "",
          country: "",
          state: "",
          city: "",
          zipcode: "",
          phone: "",
          referredBy: "",
          rank: "",
          successfulInvites: 0,
        },
      });
      await Wallet.create({
        user: user.id,
      });
    },
  }
})