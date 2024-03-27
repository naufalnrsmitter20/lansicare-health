import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import connect from "@/src/utils/db";
import { AuthOptions, NextAuthOptions } from "next-auth";
import User from "../models/userModel";
import { error } from "console";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: `JSGVCGHSDBJCHBHKBEWTYYUC326ET7WQUIOI`,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        fullname: { label: "Nama", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await connect();
        const user = await User.findOne({ email });
        if (!user) throw error("Email/Password Invalid");

        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) throw error("Email/Password Invalid");

        return {
          name: user.fullname,
          email: user.email,
          role: user.role,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
