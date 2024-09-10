import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '@/models/User';
import mongodbConnect from "@/lib/mongodb";

// Define the User type
interface UserProps {
  //id: string;
  username: string;
  password: string;
  /*comments: string;
  amount: number;
  age: number;
  name:string;
  email:string;*/
}

interface SessionUser {
  username?: string;
  password?: string;
}

// ขยายประเภทของ Session
interface CustomSessionUser extends SessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "username/password",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, request): Promise<any> {
        /*const user: UserProps = {
          id: "101",
          username: "tee",
          password: "tr",         
        };

        return user;*/
        
        await mongodbConnect();

        //const user = await User.findOne({username: credentials?.username, password: credentials?.password});                
        const user = await User.findOne();

        console.log("Data Users : ", user);

        if (user && 'username' in user && 'password' in user) {
          // ตรวจสอบว่ามีคุณสมบัติ username และ password
          return user as UserProps;  // แปลงเป็น UserProps ถ้าเงื่อนไขถูกต้อง
        } else {
          return null;
        }

        /*if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;                        
        }*/
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],  
  callbacks : {
    async jwt({token, user,account}) {
      if ('username' in user && 'password' in user) {
        token.username = user.username;
        token.password = user.password;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        username: typeof token.username === 'string' ? token.username : undefined,
        password: typeof token.password === 'string' ? token.password : undefined,
      } as any;
      return session;
    }
  }
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
