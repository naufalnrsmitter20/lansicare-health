import { SessionProvider as Provider, SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

function NextAuthProvider({ children }: Props) {
  return <SessionProvider basePath="/api/auth">{children}</SessionProvider>;
}

export default NextAuthProvider;
