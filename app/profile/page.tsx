"use client"; // ทำให้เป็น Client Component

import React, { useEffect } from "react";
import { useSession,signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  /*useEffect(() => {    
    if (status === "unauthenticated") {
      const callbackUrl = window.location.pathname;            
      router.push(`/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
  }, [status, router]);*/

  if (status == "unauthenticated") {
    return (
      <div>
        <div>Please Sign In</div>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    )
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <div>User: {session.user?.name}</div>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return null; // หากไม่มี session และอยู่ระหว่าง redirect
}
