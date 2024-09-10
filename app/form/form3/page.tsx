"use client";

import React, { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

export default function Form3Page() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  function submitHandler(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();

    if (!isUsernameValid && usernameRef.current) {
      usernameRef.current.focus();
    } else if (!isPasswordValid && passwordRef.current) {
      passwordRef.current.focus();
    } else {
      alert(`username: ${usernameRef.current?.value} \npassword: ${passwordRef.current?.value}`);
      if (usernameRef.current) usernameRef.current.value = "";
      if (passwordRef.current) passwordRef.current.value = "";
      setIsUsernameValid(false);
      setIsPasswordValid(false);
    }
  }

  function checkUsername() {
    if (usernameRef.current?.value.trim() == "") {
      setIsUsernameValid(false);
    } else {
      setIsUsernameValid(true);
    }
  }

  function checkPassword() {
    if (passwordRef.current?.value.trim() == "") {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  }
  return (
    <div className="flex justify-center w-1/2 mx-auto">
      <form action="" onSubmit={submitHandler} className="flex flex-col space-y-2 mt-2">
        
        <label htmlFor="username" className="flex items-center space-x-2"><span><FaUser/></span><span>Username</span></label>
        <input
          type="text"
          name="username"
          className="border border-blue-400"
          onChange={checkUsername}
          ref={usernameRef}
        />        
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="border border-blue-400"
          onChange={checkPassword}
          ref={passwordRef}
        />

        <input type="submit" value={'OK'} className="bg-blue-400 text-white "/>
      </form>
    </div>
  );
}
