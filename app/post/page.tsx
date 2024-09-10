import React from "react";

interface Posts{
  title:string;
}

async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {next : {revalidate: 60}});

  if (!response.ok) {
    throw new Error("Can not get post from API");
  }

  return response.json();
}

export async function PostPage() {
  let posts = [];

  try {
    posts = await getPost();
  } catch (error: any) {
    return <div>{error.message};</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      {
        posts.map((item:Posts, index:number) => {
          return(
            <div key={index}>
              <p>{item.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostPage;
