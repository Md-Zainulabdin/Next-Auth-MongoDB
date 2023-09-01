import connectMongoDB from "@/libs/mongodb";
import User from "@/model/users";
import { compare } from "bcryptjs";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",

            async authorize({ email, password }) {
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if (!user) return null;

                    const isPasswordMathced = await compare(password, user.password);

                    if (!isPasswordMathced) return null;

                    return user
                } catch (error) {

                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }