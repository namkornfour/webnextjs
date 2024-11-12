"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function signin() {
  const router = useRouter();
  const searchParam = useSearchParams();

  const handleSignIn = () => {
    //signIn("google", { callbackUrl: "/about" });
    signIn("google", { callbackUrl: searchParam.get("callbackUrl") || "/" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // ใช้ currentTarget เพื่อให้ TypeScript เข้าใจประเภทได้
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;      

    /*const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.ok) {
      const callbackUrl = searchParam.get("callbackUrl") || "/";
      router.push(callbackUrl);    
    } else {
      console.error("Login failed", result?.error);
    }*/

      const result = await signIn("credentials", {
        redirect: true,  // ใช้ redirect true เปลี่ยนเส้นทางหลังจาก signin
        username,
        password,
        callbackUrl: searchParam.get("callbackUrl") || "/", // ส่ง callbackUrl
      });
    
      // ไม่ต้องใช้ router.push เนื่องจาก NextAuth จะจัดการการเปลี่ยนเส้นทางให้
      if (result?.error) {
        console.error("Login failed", result.error);
      }
  };

  return (
    <div>
      <h1>Sign In</h1>

      {/* ปุ่มสำหรับการล็อกอินด้วย Google */}
      <button onClick={handleSignIn}>Sign in with Google</button>
      <br />
      <button onClick={() => signOut()}>Sign Out Google</button>

      {/* ปุ่มสำหรับการล็อกอินด้วย Credentials */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            className="border border-blue-500 pl-2"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="border border-blue-500 pl-2"
          />
        </div>
        <button type="submit">Sign in with Credentials</button>
      </form>
    </div>
  );
}
