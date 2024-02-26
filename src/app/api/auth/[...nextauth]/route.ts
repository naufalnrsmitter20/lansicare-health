// @ts-nocheck
import NextAuth, { AuthOptions } from "next-auth";
import { authOptions } from "@/src/lib/authOption";

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
