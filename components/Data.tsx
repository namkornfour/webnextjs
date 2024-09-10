"use client";

import React, { useState, useRef } from "react";

export default function DataPage() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<any>(null);
  const [isVerify, setIsVerify] = useState<boolean>(true);

  function clearForm() {
    if (usernameRef.current) {
      usernameRef.current.value = "";
    }

    if (passwordRef.current) {
      passwordRef.current.value = "";
    }
  }

  function verify() {
    if (usernameRef.current?.value.trim() === "") {
      usernameRef.current.focus();
      setData({ uername: "", password: "" });
      setIsVerify(false);
      return false;
    }

    if (passwordRef.current?.value.trim() === "") {
      passwordRef.current.focus();
      setData({ username: "", password: "" });
      setIsVerify(false);
      return false;
    }

    setIsVerify(true);
    return true;
  }

  async function sendPost() {
    if(!verify()) return;

    const res = await fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameRef.current?.value,
        password: passwordRef.current?.value
      })
    })

    const dataRes = await res.json();
    setData(dataRes);
    clearForm();
  }

  return (
    <div className="flex">
      <div className="flex flex-col justify-center mx-auto w-1/2 bg-base-200 space-y-2">
        <div>
          <label htmlFor="username">Username : </label>
          <input type="text" name="username" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="text" name="password" ref={passwordRef} />
        </div>

        <div>
          <button className="btn btn-primary text-white" onClick={sendPost}>Send Post</button>
        </div>

        <div className="flex flex-col pt-4">
      {data && (
        <div>
          <div>Username : {data.username}</div>
          <div>Password: {data.password}</div>
        </div>
      )}
      </div>
      </div>      
    </div>
  );
}
