'use client'

import React from "react";
import useSWR from "swr";

export default async function Test1Page() {
  const fetcher = async (url: string) => await fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error.message</div>;
  }

  return (
    <div className="flex flex-col justify-center mx-auto w-3/4">
      {data.map((item: any) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}
