'use client'

import Link from "next/link";  
import {useState , useEffect} from 'react'

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setTheme(savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);
   
  return (
    <div className="flex flex-col">
      <h1 className="text-blue-500 flex justify-center">Welcome to Nextjs Udoo.com </h1>

      <div className="flex justify-center">
        <ul>
          <li>
            <Link href="/about">About page</Link>
          </li>
          <li>
            <Link href="/post">Post-Prisma</Link>
          </li>
          <li>
            <Link href="/posts/1">Post</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>          
          <li>
            <Link href="/products/add">Add Product</Link>
          </li>          
          <li>
            <Link href="/data">Send Post</Link>            
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>          
          <li>
            <Link href="/downloads">Download</Link>
          </li>
          <li>
            <Link href="/tailwindtest">TailWindCSS</Link>
          </li>
          <li>
            <Link href="/daisyui">DaisyUi</Link>
          </li>
          <li>
            <Link href="/hook?num=1">Hook Example</Link>
          </li>
          <li>
            <Link href="/context">Context Api</Link>
          </li>
          <li>
            <Link href={'/student'}>Students</Link>
          </li>
          <li>
            <Link href={'/employee'}>Employee</Link>
          </li>
          <li>
            <Link href={'/password'}>Password</Link>
          </li>
          <li>
            <Link href={'/tailwindtest'}>TailWindCss</Link>
          </li>
          <li>
            <Link href={'/daisyui'}>DaisyUI</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
