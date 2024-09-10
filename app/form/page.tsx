'use client'

import React, { useState } from "react";

export default function page() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function submitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ userName, password });
  }

  return (
  <div className="flex w-1/2 mx-auto">
    <form className="flex flex-col w-5/12 bg-base-100 justify-stretch py-2" onSubmit={submitHandle}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" className="border border-blue-400" onChange={(e) => setUserName(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" className="border border-blue-400" onChange={(e) => setPassword(e.target.value)}/>
        
        <input className="bg-blue-400 text-white mt-4 p-1" type="submit" value={'Submit'}/>
    </form>
  </div>
  );
}