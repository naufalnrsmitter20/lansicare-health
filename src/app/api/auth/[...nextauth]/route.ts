import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Admin from "@/src/models/Admin";
import Pasien from "@/src/models/Pasien";
import connect from "@/src/utils/db";
import { Provider } from "next-auth/providers/index";

interface AuthOptions {
  providers: Provider[];
  callbacks: {
    signIn: (param: { user: AuthUser; account: Account }) => Promise<boolean>;
  };
}

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
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await Admin.findOne({ email: credentials.email });
          await Pasien.findOne({
            email: credentials.email,
            nama: credentials.nama,
          });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
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
    async signIn({ user, account }: { user: AuthUser; account?: Account }) {
      try {
        if (account?.provider === "credentials") {
          return true;
        } else if (account?.provider === "github") {
          await connect();
          const existingUser =
            (await Admin.findOne({ email: user.email })) ||
            (await Pasien.findOne({ email: user.email }));

          if (!existingUser) {
            const newAdmin = new Admin({
              email: user.email,
            });
            const newPasien = new Pasien({
              email: user.email,
            });

            await newAdmin.save();
            await newPasien.save();
          }
          return true;
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
      return false; // Default to false if no conditions are met
    },
  },
};

export const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST };
