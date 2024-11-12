"use client";

import React, { useEffect, useState } from "react";
import LoadingPage from "./loading";

export default function TestPage() {
  const [user, setUser] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {cache: 'no-store'});
        const data = await res.json();
        setUser(data);
      }, 3000);
    });
  }

  async function getPost() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("No data");
      }

      const post = await res.json();
      setData(post);
    } catch (err: any) {
      setError(err.message);
    }
  }

  useEffect(() => {
    // getData();
    getPost();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <LoadingPage />;
  }

  return (
    <div className="flex flex-col justify-center mx-auto w-1/2">
      {/* {user ? (
        <>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.username}</div>
        </>
      ) : (
        <div><LoadingPage/></div>
      )} */}
      {data.map((item: any, index: number) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
}