"use client";

import React, { useState, useEffect } from "react";

interface ClientType {
  name: string;
  email: string;
  username: string;
}

export default function ClientPage() {
  const [user, setUser] = useState<ClientType>();

  async function getUserData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const userObj = await response.json();
    setUser(userObj);
  }

  useEffect(() => {
    getUserData();
  }, []);

  if (!user) {
    return <div>Loding...</div>;
  }

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.username}</div>
    </div>
  );
}
