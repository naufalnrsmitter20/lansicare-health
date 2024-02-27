import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Admin from "@/src/models/Admin";
import Pasien from "@/src/models/Pasien";
import connect from "@/src/utils/db";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        nama: { label: "Nama", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        try {
          const user = await Pasien.findOne({ email: credentials?.email });
          const admin = await Admin.findOne({
            email: credentials?.email,
            nama: credentials?.nama,
          });
          if (admin) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password || "",
              admin.password,
            );
            if (isPasswordCorrect) {
              return admin;
            }
          } else if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password || "",
              user.password,
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === "credentials") {
          return true;
        } else if (account?.provider === "github") {
          await connect();
          const existingAdmin = await Admin.findOne({ email: user.email });
          const existingUser = await Pasien.findOne({ email: user.email });
          if (!existingAdmin) {
            const newAdmin = new Admin({
              email: user.email,
            });
            await newAdmin.save();
          } else if (!existingUser) {
            const newPasien = new Pasien({
              email: user.email,
            });
            await newPasien.save();
          }
          return true;
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
      return false;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
