import React from "react";

interface Props {
  searchParams: {
    username: string;
    password: string;
  };
}

export default function SearchParamsPage({ searchParams }: Props) {
  const { username, password } = searchParams;

  return (
    <div className="flex flex-col justify-center mx-auto">
      <div>{username}</div>
      <div>{password}</div>
    </div>
  );
}
