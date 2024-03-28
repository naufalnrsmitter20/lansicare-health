import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import connect from "@/src/utils/db";
import { AuthOptions, NextAuthOptions } from "next-auth";
import User from "../models/userModel";
import nodemailer, { TransportOptions } from "nodemailer"; // Import TransportOptions

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
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
        if (!user) throw new Error("Email/Password Invalid");

        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) throw new Error("Email/Password Invalid");

        const transporter = nodemailer.createTransport({
          // Menggunakan tipe TransportOptions<SMTPTransport.SentMessageInfo> untuk opsi transport SMTP
          host: process.env.EMAIL_SERVER_HOST,
          port: parseInt(process.env.EMAIL_SERVER_PORT || ""), // Konversi port ke angka
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        }); // Menambahkan tipe TransportOptions<SMTPTransport.SentMessageInfo>

        const mailOptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: "Email Verification",
          text: "Please verify your email address.",
        };

        transporter.sendMail(mailOptions, function (error: any, info: any) {
          if (error) {
            console.error("Error sending email verification:", error);
          } else {
            console.log("Email verification sent:", info.response);
          }
        });

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
