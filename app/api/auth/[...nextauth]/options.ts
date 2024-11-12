import { NextAuthOptions, DefaultSession, Session } from "next-auth";
//import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import mongodbConnect from "@/lib/mongodb";
//import bcrypt from "bcryptjs";

interface Credentials {
  username: string;
  password: string;
}

/*interface UserSession extends DefaultSession {
  user: {
    amount?: number; // เพิ่ม amount
  } & DefaultSession["user"]; // นำฟิลด์ user มาจาก DefaultSession
}*/

interface CustomUser {
  id?: string;
  name?: string;
  email?: string;
  image?: string;
  amount?: number;
  username?: string;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // ตัวอย่างการตั้งค่า CredentialsProvider
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // โค้ดการยืนยันผู้ใช้ เช่นการเช็ค username และ password
        const { username, password } = credentials as Credentials;

        /*const user = {
          id: "1",
          
          name: "Tee",
          email: "user@example.com",
          amount: 10,
        };

        if (username === "tee" && password === "tr") {
          return user;
        } else {
          return null;
        }*/

        await mongodbConnect();

        const user = await User.findOne({ username, password });
        console.log(user);

        if (user) {
          return {
            id: user._id,
            name: user.username,
            email: user.comments,
            amount: user.amount,
            username: user.username,
          };
        } else {
          console.log("user not fuond");
          return null;
        }
      },
    }),
    GoogleProvider({
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // ตรวจสอบว่ามี user หรือไม่ก่อนที่จะเพิ่ม score
      if (user) {
        token.user = { ...user }; // เพิ่ม user เข้าไปใน token
      }
      return token; // คืนค่า token
    },
    async session({ session, token }): Promise<Session> {
      const user = token?.user as CustomUser | undefined;

      // ตรวจสอบว่า session.user มีอยู่หรือไม่
      if (session.user) {
        // ถ้ามี user ให้เพิ่ม amount
        //(session.user as { amount?: number }).amount = user?.amount ?? 0; // ถ้า user มีให้ใช้ amount จาก user ถ้าไม่มีก็ใช้ 0
        const userAmount = user?.amount ?? 0;
        const username = user?.username ?? "";

        session.user.amount = userAmount;
        session.user.username = username;
      }
      return session as Session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin", // ตั้งค่าเส้นทางสำหรับการเข้าสู่ระบบ
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token", // ชื่อ cookie
      options: {
        httpOnly: true, // cookie จะไม่สามารถเข้าถึงได้จาก JavaScript
        secure: process.env.NODE_ENV === "production", // ใช้ secure cookies ใน production
        sameSite: "lax", // ช่วยป้องกัน CSRF
        path: "/", // เส้นทางของ cookie
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // หมดอายุใน 30 วัน
      },
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 วัน
  },
};
