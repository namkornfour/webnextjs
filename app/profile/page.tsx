import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Session } from "next-auth";

interface CustomSessionUser {
    username?: string;
    password?: string;
  }
  
  interface CustomSession extends Session {
    user: CustomSessionUser & {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  

export default async function NavBar() {
    const session = await getServerSession(options) as CustomSession;

 console.log('Data Session:', session);

 if(session){
    return (
        <div className="flex flex-col justify-center mx-auto w-1/2">
            <div>{session.user?.username}</div>
            <div>{session.user?.password}</div>
            <div>
                <Link href={'/api/auth/signout?callbackUrl=/profile'}>Sign Out</Link>
            </div>
        </div>
    )
    console.log(session);
 }

 return (
    <div className="flex flex-col justify-center mx-auto w-1/2">
        <div>
            <div>Username :</div>
            <div>Password :</div>
            <Link href={'/api/auth/signin?callbackUrl=/profile'}>Sign In</Link>
        </div>
    </div>
 )
}