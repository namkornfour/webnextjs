"use client";

import React, { useState, useRef, FormEvent } from "react";
import Link from "next/link";

function MyFormPage() {
  //1. เก็บ state แยก
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const [isUserValid, setIsUserValid] = useState(false);
  const [isPasswordValid, setIsPasswordValue] = useState(false);

  //2. เก็บไว้ใน object เดียว
  const [formObj, setFormObj] = useState({
    username: "",
    password: "",
  });

  //3. use ref
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function onLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //console.log({ formObj });
    // alert(formObj.username);
    /*if (usernameRef.current) {
      alert(usernameRef.current.value);
    }*/

    if (!isUserValid) {
      if (usernameRef.current) {
        usernameRef.current.focus();
      }
    } else if (!isPasswordValid) {
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
    } else {
      if (usernameRef.current) {
        usernameRef.current.value = "";
      }
      if (passwordRef.current) {
        passwordRef.current.value = "";
      }

      setIsUserValid(false);
      setIsPasswordValue(false);
    }
  }

  function checkUsername() {
    if (usernameRef.current?.value.trim() === "") {
      setIsPasswordValue(false);
    } else {
      setIsPasswordValue(true);
    }
  }

  function checkPassword() {
    if (usernameRef.current?.value.trim() === "") {
      setIsPasswordValue(false);
    } else {
      setIsPasswordValue(true);
    }
  }

  return (
    <div className="flex justify-center items-center mx-auto">
      <form
        className="flex flex-col justify-start items-stretch w-5/12 mx-auto mb-5"
        onSubmit={onLoginSubmit}
      >
        <label htmlFor="username">Username</label>
        <input
          className="border border-gray-500 rounded-sm"

          type="text"
          name="username"
          autoComplete="off"
          ref={usernameRef}
          placeholder={`${!isUserValid?'Please key username': ''}`}          
          onChange={(e) => setFormObj({ ...formObj, username: e.target.value })}
        />
        <label htmlFor="password">password</label>
        <input
          className="border border-gray-500 rounded-sm"
          type="text"
          name="password"
          onChange={(e) => setFormObj({ ...formObj, password: e.target.value })}
        />
        <input
          className="bg-blue-500 text-white"
          type="submit"
          value="Submit"
        />
      </form>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 -

      <p>
        <Link href="/">Home</Link>
      </p>
      <br />
      <p>
        <Link href="/serveraction">ServerAction</Link>
      </p>
    </div>
  );
}

export default MyFormPage;
