import React from 'react';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession} from 'next-auth';
import { redirect } from 'next/navigation';
//import { signIn } from 'next-auth/react';

export default async function AboutPage() {
  const session = await getServerSession(options);
  
  //console.log("Session: ", session);

  if (!session) {
    const callbackUrl = encodeURIComponent('/about'); // ตั้ง callbackUrl ให้ถูกต้อง
    redirect(`/auth/signin?callbackUrl=${callbackUrl}`); // ทำการ redirect ไปที่หน้า signIn พร้อม callbackUrl    
    return null; // เพื่อไม่ให้ทำการ render หน้า
  }

  return (
    <div>
      <h1>Data from About Page</h1>
      <p>Welcome, <span className='text-blue-500'>{session.user?.name}</span></p>
      <p>Email: <span className='text-primary'>{session.user?.email}</span></p>
      <p>Amount : <span className='text-secondary'>{session.user?.amount}</span></p>
      <p>Usernmae: <span className='text-primary'>{session.user?.username}</span></p>
    </div>
  );
}
