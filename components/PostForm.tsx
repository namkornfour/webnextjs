"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { PostProps } from "@/types/Post";
import { NextResponse } from "next/server";

function PostForm() {
  const [data, setData] = useState<PostProps[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<Number | null>(null);
  const [error , setError] = useState('');

  async function fetchData() {
    try {
      setIsLoading(true);
      const res = await fetch("/api/post", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("error cannot get");
      }

      const post = await res.json();
      setData(post);
    } catch (error: unknown) {
      /*return NextResponse.json(
        { error: error instanceof Error ? error.message : "Can not add Post" },
        { status: 500 }       
      );*/
      setError(error instanceof Error ? error.message : "ไม่สามารถดึงข้อมูลได้");
    } finally {
      setIsLoading(false);
    }
  }

  function ClearForm() {
    setTitle("");
    setContent("");
    setEditingId(null);
    setError('');
  }

  async function AddPost(e: FormEvent) {
    e.preventDefault();

    if(!title || !content) {
      setError("กรุณาใส่ข้อมูลให้ครบ");
      return;
    }

    try {
      const res = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
          title,
          content,
        }),
      });

      /*const post = await res.json();
      if (post.id) {
        ClearForm();
      } else {
        console.log(post.error);
      }*/

      if (res.ok) {
        ClearForm();
      }
    } catch (error: unknown) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Can not add Post" },
        { status: 500 }
      );
    }
  }

  async function DeletePost(id: number) {
    try {
      const res = await fetch(`/api/post/${id}`, {
        method: "DELETE"
      });

      if (!res.ok) {
        throw new Error("Can not delete data");
      }

      fetchData();
    } catch (error: unknown) {
      /*return NextResponse.json(
        { error: error instanceof Error ? error.message : "Can not add Post" },
        { status: 500 }
      );*/
      setError(error instanceof Error ? error.message : "ไม่สามารถเพิ่มข้อมูลได้");
    }
  }

  async function UpdatePost(e: FormEvent) {
    e.preventDefault();

    if(!title) {
      setError("กรุณาใส่หัวข้อ");
      return;
    }

    try {
      const res = await fetch(`/api/post/${editingId}`,{
        method: 'PUT',
        body: JSON.stringify({
          title: title,
          content: content
        })
      })

      if(!res.ok) {
        throw new Error('Can not Update');
      }

      ClearForm();
      fetchData();

    } catch (error: unknown) {
      /*return NextResponse.json(
        { error: error instanceof Error ? error.message : "Can not add Post" },
        { status: 500 }
      );*/
      setError(error instanceof Error ? error.message : "ไม่สามารถลบข้อมูลได้");
    }
  }

  useEffect(() => {
    fetchData();
  }, [title]);

  return (
    <div className="flex flex-col justify-center mx-auto w-1/2">
      {data && data.length !== 0 ? (
        <div>
          {data.map((iPost, index) => (
            <div key={index}>
              <div>{iPost.id}</div>
              <div>{iPost.title}</div>
              <div>{iPost.content}</div>
              <div>{iPost.published}</div>
              <div>{iPost.createdAt}</div>

              <div>
              <button className="btn btn-warning" onClick={() => DeletePost(Number(iPost.id))}>Delete</button>
              <br />
              <button className="btn btn-secondary" onClick={() => {setTitle(iPost.title);setContent(iPost.content);setEditingId(parseInt(iPost.id));}}>Edit</button>
            </div>
            </div>
          ))}
        </div>
      ) : (
        !isLoading && <div>No data</div>
      )}
      
      <div className="flex justify-center mx-auto text-red-500">
        {error}
      </div>

      <div className="flex flex-col">        
        <form onSubmit={editingId? UpdatePost : AddPost}>
          <div className="flex mb-4">
            <label htmlFor="title" className="block w-24">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-1 border-blue-500 ml-2 block flex-grow"
            />
          </div>
          <div className="flex">
            <label htmlFor="content" className="block w-24">
              Content
            </label>
            <input
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border border-1 border-blue-500 ml-2 block flex-grow"
            />
          </div>

          <div className="flex item-center justify-center mt-4">
            <div>
              <button type="submit" className="btn btn-primary bg-blue-500">
                {editingId ? "Edit" : "Add"}
              </button>
            </div>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
