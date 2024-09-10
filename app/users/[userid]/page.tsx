import React from "react";

export async function generateStaticParams() {
  return [{ userid: "1" }, { userid: "4" }];
}

async function getDataById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw Error("Cannot find data");

  return res.json();
}

interface Props {
  params: {
    userid: string;
  };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function UsersPage({ params }: Props) {
  const { userid } = params;
  let user: User | null = null;
  try {
    user = await getDataById(userid);

    // if(!user) {
    //   return <div>No data</div>
    // }
  } catch (error: any) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="flex">
      <div className="flex flex-col justify-center mx-auto w-1/2">
        <div>{user?.id}</div>
        <div>{user?.name}</div>
        <div>{user?.username}</div>
        <div>{user?.email}</div>
      </div>
    </div>
  );
}
