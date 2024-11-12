'use client'

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (    
    <div>
      {!session ? (
        <>
          <h1>Not signed in</h1>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </>
      ) : (
        <>
          <h1>Signed in as {session.user?.email}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
    
  );
}
