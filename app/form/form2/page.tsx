"use client";

import React, { useState } from "react";

export default function Form2Page() {
  const [formObj, setFormObj] = useState({
    username: "",
    password: "",
  });

  function submitHandler(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    console.log(formObj);
  }

  return (
    <div className="flex justify-center w-2/3 mx-auto">
      <form className="flex flex-col mt-2 space-y-1" onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="border border-blue-400"
          onChange={(e) => setFormObj({ ...formObj, username: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          className="border border-blue-400"
          onChange={(e) => setFormObj({ ...formObj, password: e.target.value })}
        />
        <input
          type="submit"
          className="bg-blue-400 text-white py-1"
          value={"OK"}
        />
      </form>
    </div>
  );
}
