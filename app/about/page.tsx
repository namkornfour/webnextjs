'use client'

import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react';

export default function AboutPage() {
  const {data, status} = useSession();

  if(status === 'loading') {
    return <div>Loading...</div>
  }

  if(status === 'authenticated') {
    return (
      <div>
        <div>User: {data.user?.name}</div>
        <button onClick={() => signOut()}>Sing OUt</button>
      </div>
    )
  }

  if(status === 'unauthenticated')
  {
  return (
    <div>
      <div>Please Sign In</div>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  )
}
}
