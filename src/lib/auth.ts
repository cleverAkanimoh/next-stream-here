import { NextAuthOptions, User, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "sign in",
      credentials: {},
      async authorize(credentials) {
        const { email, passcode } = credentials as {
          email: string;
          passcode: string;
        };

        if (!credentials || !email || !passcode)
          throw new Error("invalid credentials");

        const dbUser = await prisma.user.findUnique({
          where: { email },
        });

        if (dbUser && dbUser.passcode === passcode) {
          return dbUser as User;
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
  },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) {
    return redirect("/");
  }
}
