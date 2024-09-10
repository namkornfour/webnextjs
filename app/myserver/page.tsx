"use client";

import React, { useEffect, useState } from "react";
import LoadingPage from "./loading";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function ServerPage() {
  const [user, setUser] = useState<User | null>(null);

  async function getData() {
    const response = await axios.get<User>(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const users = response.data;
    //setUser(users);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(setUser(users));
      }, 3000);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  if (!user) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-1/2 justify-center mx-auto">
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
    </div>
  );
}
