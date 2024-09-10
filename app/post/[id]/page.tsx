import React from "react";

interface Props {
  params: {
    id: number;
  };
}

interface Post {
  title: string;
  body: string;
}

async function fetchPost(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }: Props) {
  const { id } = params;
  const post: Post = await fetchPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }: Props) {
  const { id } = params;
  const data: Post = await fetchPost(id);

  return (
    <div className="flex flex-col justify-center w-1/2 mx-auto">
      <div>Title: {data.title}</div>
      <div>Body: {data.body}</div>
    </div>
  );
}
