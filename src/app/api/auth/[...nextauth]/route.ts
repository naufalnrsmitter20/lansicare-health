import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Admin from "@/src/models/Admin";
import Pasien from "@/src/models/Pasien";
import connect from "@/src/utils/db";

export const authOptions: any = {
  // Configure one or more authentication providers
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
          const user = (await Admin.findOne({ email: credentials.email })) || (await Pasien.findOne({ email: credentials.email, nama: credentials.nama }));
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
            if (isPasswordCorrect) {
              return user;
            }
          }
          // const pasien = await Pasien.findOne({ email: credentials.email });
          // if (pasien) {
          //   const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
          //   if (isPasswordCorrect) {
          //     return pasien;
          //   }
          // }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == "credentials") {
        return true;
      }
      if (account?.provider == "github") {
        await connect();
        try {
          const existingUser = (await Admin.findOne({ email: user.email })) || (await Pasien.findOne({ email: user.email }));
          if (!existingUser) {
            const newAdmin = new Admin({
              email: user.email,
            });
            const newPasien = new Pasien({
              email: user.email,
            });

            await newAdmin.save();
            await newPasien.save();
            return true;
          }
          // const existingPasien = await Pasien.findOne({ email: user.email });
          // if (!existingPasien) {
          //   const newPasien = new Pasien({
          //     email: user.email,
          //   });

          //   await newPasien.save();
          //   return true;
          // }
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
