import React from "react";
import Image from "next/image";

export default function TailwindTest() {
  return (
    <div>
      <div className="block bg-blue-500 text-red-500">
        This is an example text with underline decoration-clone.
      </div>
      <div className="inline bg-red-500 text-blue-500">
        This is an example text inline
      </div>
      <div className="inline-block w-32 h-32 bg-green-500">
        This is an inline-block element.
      </div>
      <div className="flex bg-yellow-500">
        <div className="flex-1 bg-blue-400">Item 1</div>
        <div className="flex-1 bg-blue-600">Item 2</div>
      </div>
      <div className="contents bg-gray-500">
        <span className="bg-orange-500">This is visible.</span>
        <span className="bg-red-500">This is also visible.</span>
      </div>
      <div className="grid grid-cols-3 gap-4 bg-purple-500">
        <div className="bg-green-300">Item 1</div>
        <div className="bg-green-500">Item 2</div>
        <div className="bg-green-700">Item 3</div>
      </div>
      <div className="flow-root bg-gray-300">
        <div className="float-left bg-blue-500 p-2">float ซ้าย</div>
        <div className="float-right bg-green-500 p-2">float ขวา</div>
      </div>

      <div className="bg-gray-200 p-4 w-1/2 mx-auto text-justify">
        <Image
          className="float-left mr-4"
          src="/acctax.jpg"
          alt="Picture"
          width={60}
          height={60}
        />
        <p className="tracking-normal leading-6">
          Lorem ipsum dolor sit amet, consectetur{" "}
          <span className="underline decoration-sky-500">adipiscing</span> elit.
          Donec a diam lectus. Integer nec odio. Phasellus faucibus, velit a
          consectetur ullamcorper, felis erat fermentum ligula, sit amet
          vehicula quam felis Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec a diam lectus. Integer nec odio. Phasellus faucibus, velit
          a consectetur ullamcorper, felis erat fermentum ligula, sit amet
          vehicula quam felis eget eros.
        </p>

        <div className="clear-left">องค์ประกอบนี้จะอยู่ใต้รูป</div>
      </div>

      <div className="relative bg-gray-200 p-4">
        <div className="absolute top-0 left-0 bg-blue-500 text-white p-2">
          องค์ประกอบที่แยกบริบทการจัดรูปแบบ
        </div>
        <div className="bg-red-500 text-white p-2">
          องค์ประกอบอื่นๆ ที่ไม่ถูกแยกบริบทการจัดรูปแบบ
        </div>
      </div>

      <div className="w-64 h-64 bg-gray-400">
        <Image
          className="object-scale-down w-full h-full"
          src="/acctax.jpg"
          alt="Picture"
          width={200}
          height={200}
        />
      </div>
      <hr />
      <br />

      <div className="w-64 h-64 bg-gray-400">
        <Image
          className="object-cover object-left w-full h-full"
          src="/acctax.jpg"
          alt="Picture"
          width={60}
          height={60}
        />
      </div>

      <div className="relative w-64 h-64 bg-gray-200 mt-2">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 z-10 pt-1 pl-1">
          <p>เนื้อหานี้มี z-index: 10</p>
        </div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 z-20 p-2">
          <p>เนื้อหานี้มี z-index: 20</p>
        </div>
      </div>

      <div className="flex space-x-2 bg-gray-200 p-4 min-w-full">
        <div className="bg-blue-500 text-white p-4 border shadow-lg shadow-blue-600 hover:opacity-90">
          Item 1
        </div>
        <div className="bg-red-500 text-white p-4">Item 2</div>
        <div className="bg-green-500 text-white p-4">Item 3</div>
      </div>

      <div className="space-y-4 bg-gray-200 p-4 max-w-1/2">
        <div className="bg-blue-500 text-white p-4 size-full font-sans text-2xl antialiased italic font-bold text-left">
          Item 1
        </div>
        <div className="bg-red-500 text-white p-4 size-full font-serif antialiased hover:italic text-right">
          Item 2
        </div>
        <div className="bg-green-500 text-white p-4 size-full font-mono subpixel-antialiased text-center">
          Item 3
        </div>
        <div className="bg-green-500 text-white p-4 size-full font-mono subpixel-antialiased text-justify">
          Item 4
        </div>
      </div>

      <div className="text-5xl font-extrabold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Hello world
        </span>
      </div>

      <div className="bg-blue-500 text-white p-8 rounded-full w-1/4 mx-auto">
        This div has a standard border radius.
      </div>

      <div className="text-center m-4">
        <button className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 bg-blue-500 text-white rounded">
          Savechange
        </button>
      </div>

      <div className="text-center m-4">
        <label>
          <input type="checkbox" checked />
          Browser default
        </label>
        <label>
          <input type="checkbox" className="accent-pink-500" checked />
        </label>
      </div>

      <div className="flex w-1/2 mx-auto bg-gray-400 justify-around mb-4">
        <div className="bg-blue-500 h-10 w-40">01</div>
        <div className="bg-blue-500 h-10 w-40">02</div>
        <div className="bg-blue-500 h-10 w-40">03</div>        
      </div>

      <div className="grid grid-cols-2 w-1/2 mx-auto bg-gray-400 mb-8 place-content-center h-full gap-y-2">
        <div className="bg-blue-500 size-20">01</div>
        <div className="bg-blue-500 size-20">02</div>
        <div className="bg-blue-500 size-20">03</div>        
        <div className="bg-blue-500 size-20">03</div>        
      </div>
    </div>
  );
}
