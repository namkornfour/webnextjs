import Link from "next/link";

export async function generateMetadata() {
  return {
    title: 'My Website',
    description:'accounting service',
  }
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-blue-500 flex justify-center">Welcome to Nextjs Udoo.com </h1>

      <div className="flex justify-center">
        <ul>
          <li>
            <Link href="/about">About page</Link>
          </li>
          <li>
            <Link href="/post">Post</Link>
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
            <Link href="/download">Download</Link>
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
        </ul>
      </div>
    </div>
  );
}
