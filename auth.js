import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/client";
import Credentials from "next-auth/providers/credentials";
import User from "./models/User";
import bcrypt from "bcryptjs";
import { dbconnect } from "./lib/mongo";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    Google,
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
    async signIn({ user, account }) {
      if (account.provider === "google" && user.email) {
        await dbconnect();

        const dbUser = await User.findOne({ email: user.email });

        if (dbUser) {
          dbUser.image ??= user.image;

          dbUser.address ??= "";
          dbUser.country ??= "";
          dbUser.state ??= "";
          dbUser.city ??= "";
          dbUser.zipcode ??= "";
          dbUser.phone ??= "";

          dbUser.zoiid ??= generateZoiId();
          dbUser.referralCode ??= generateReferralCode();
          dbUser.referredBy ??= "";

          dbUser.rank ??= "Bronze";
          dbUser.successfulInvites ??= 0;

          await dbUser.save();
        }
      }

      return true;
    },
  }
})