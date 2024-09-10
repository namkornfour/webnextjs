"use client";

import React, { cache } from "react";
import useSWR from "swr";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetcher = (url: string) =>
  fetch(url, { cache: "no-cache" }).then((res) => res.json());

export default function UserSwrPage() {
  const { data, error } = useSWR<User[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex">
      <div className="flex flex-col justify-center mx-auto">
        {data.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
