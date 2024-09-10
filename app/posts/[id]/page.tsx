import React from 'react'
import Image from 'next/image';

interface Params {
    params: {
        id:string;
        title: string;
        description: string;
    }
}

export async function generateMetadata({params}:Params) {
  const id = params.id;

  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);

  const post = await res.json();

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      title: post.title,
      description: post.body,
    }
  }
}

async function PostPage({params} : Params) {
  const id = params.id;

  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);

  const post = await res.json();

  return (
    <div>
      <div>Title : {post.title}</div>
      <div>Description : {post.body}</div>

      <div className='flex justify-center mx-auto'>
        <Image
        src="/acctax.jpg"
        alt = "Picture"
        width={484}
        height={488}
        />
      </div>
    </div>
  )
}

export default PostPage;