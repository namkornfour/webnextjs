import React from "react";
import Image from "next/image";

export default function TailwindTest() {
  return (
    <div className="container mx-auto mb-6">
      <div className="flex bg-blue-500 w-full">
        <div className="flex-1">A</div>
        <div className="flex-1">B</div>
        <div className="flex-1">C</div>
      </div>

      <div className="columns-3 bg-green-500 w-full">
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>

      <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        Gradient Text Example
      </div>

      <div className="block bg-blue-500 text-white">This is Block element</div>

      <div>
        <span className="inline bg-blue-500">Line1</span>
        <span className="inline-block w-1/2 bg-green-500">Line2</span>
      </div>

      <div className="grid grid-cols-2 bg-green-400">
        <div>Column1</div>
        <div>Column2</div>
      </div>

      <div className="w-1/5">
        <div className="float-left bg-blue-500">Float Left</div>
        <div className="float-right bg-green-500">Content</div>
        <div className="clear-left bg-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          quia, fugiat reprehenderit hic aliquid quidem cupiditate modi dolor
          debitis consequuntur!
        </div>
      </div>

      <div>
        <div className="relative top-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          consequuntur excepturi sequi harum, dolorem nesciunt doloremque
          numquam maiores corporis vitae corrupti, aperiam ducimus? Amet soluta
          cumque eius eum hic dolore. Qui molestias quaerat, suscipit delectus
          in ut ea hic. Veniam, reprehenderit. Explicabo, dolores sed. Nisi
          reiciendis perferendis aspernatur magnam? Perferendis magni beatae
          harum veniam ipsam consequatur quaerat ad minus consequuntur.
        </div>
      </div>

      <div className="relative bg-gray-200 p-4 mt-6">
        <div className="absolute top-0 left-0 bg-red-500 text-white p-2 z-10">
          Box 1 (z-index: 10)
        </div>
        <div className="absolute top-2 left-2 bg-blue-500 text-white p-2 z-20">
          Box 2 (z-index: 20)
        </div>
      </div>

      <div className="flex space-x-4 bg-gray-400 p-6 w-3/5">
        <div className="bg-blue-400 text-white p-4">Box 1</div>
        <div className="bg-purple-400 text-white p-4">Box 2</div>
        <div className="bg-green-400 text-white p-4">Box 3</div>
      </div>

      <div className="w-[50%] min-w-[50%] bg-blue-500">
        Min Width This box has a minimum width of 300px.
      </div>
      <div className="w-[60%] max-w-[60%] bg-blue-500 mt-4">
        Max Width This box has a minimum width of 300px.
      </div>

      <div className="size-32 mt-4 text-blue-500 text-2xl hover:italic">
        Size
      </div>

      <div className="w-1/2 text-wrap">
        <div className="text-2xl font-bold">This is data from wrap</div>
        <div className="leading-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius eaque
          quod incidunt? Blanditiis voluptatibus est pariatur aliquid, illo
          cumque nihil excepturi dolor quam vitae corrupti laudantium dolores
          officia amet? Aliquid explicabo consectetur omnis fugiat voluptates
          dolores iure cumque. Tempore, minima vero laudantium voluptas veniam
          tempora recusandae ducimus amet rem cum beatae expedita animi saepe
          dolorem perferendis ipsa itaque nostrum. Vitae dignissimos distinctio
          enim facilis, natus, quam veniam cumque in quaerat accusantium iure
          ipsum veritatis earum maxime hic rerum, saepe doloribus at. Ex
          obcaecati aut quod repudiandae, sed explicabo aliquid! Quaerat,
          voluptatibus eligendi! Animi, eligendi ad quidem enim corrupti tenetur
          mollitia commodi, reprehenderit nulla exercitationem placeat tempora
          autem? Vitae suscipit unde harum! Rerum, voluptatem in voluptatibus
          odit possimus labore dolor. Laudantium tempora obcaecati cum placeat
          consectetur ad a expedita illo aliquam incidunt corrupti facilis sit,
          id maxime! Obcaecati quis iure odit aut modi. Expedita iure fuga
          voluptatum aut, explicabo id.
        </div>
      </div>

      <div>
        <p className="tracking-widest">1234567890</p>
      </div>

      <ol className="list-decimal">
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ol>

      <div className="text-justify mb-4 capitalize">
        <span className="underline decoration-blue-500 underline-offset-2">
          Lorem
        </span>{" "}
        ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </div>

      <div className="flex items-baseline mb-4">
        <h1 className="text-2xl">Title</h1>
        <p className="text-sm">Subtitle</p>
      </div>

      <div
        className="bg-scroll bg-center bg-cover w-64 h-32 mb-4 overflow-y-scroll"
        style={{ backgroundImage: "url('acctax.jpg')" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
          dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet
          consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur
          adipisicing elit
        </p>
      </div>

      <div className="bg-red-500 border-4 border-blue-500 bg-clip-padding p-4 mb-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel et ipsam
          nesciunt illo aspernatur distinctio. Sunt maxime aliquam, odio dolorum
          iure iste, alias distinctio voluptate, aliquid ex libero maiores
          temporibus! Sequi possimus dicta delectus maiores architecto magnam,
          porro pariatur accusamus a nemo sapiente culpa soluta harum odio
          officia quibusdam dolorum velit et vitae sed tempore facilis. Nostrum
          error beatae similique?
        </p>
      </div>

      <div className="bg-red-500 border-4 border-blue-500 bg-clip-content p-4">
        พื้นหลังถูกคลิปเฉพาะภายใน padding
      </div>

      <div className="bg-red-500 border-4 border-blue-500 bg-clip-text p-4 text-transparent font-bold">
        พื้นหลังถูกคลิปเฉพาะภายใน padding
      </div>

      <div
        className="mx-auto bg-cover w-1/4 h-64 m-4 p-4 text-blue"
        style={{ backgroundImage: "url('meeting.jpg')" }}
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-50 w-64 mx-auto">
        <p>Data</p>
      </div>

      <div className="border w-64 mx-auto m-4 border-blue-400">
        <p>Data</p>
      </div>

      <div className="flex w-1/2 mx-auto">
        <table className="table-auto border border-slate-400">
          <caption>Premier League 2024</caption>
          <thead>
            <tr>
              <th className="border border-slate-400">Rank</th>
              <th className="border border-slate-400">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-400">1</td>
              <td className="border border-slate-400">Arsenal</td>
            </tr>
            <tr>
              <td className="border border-slate-400">2</td>
              <td className="border border-slate-400">Mancity</td>
            </tr>
            <tr>
              <td className="border border-slate-400">3</td>
              <td className="border border-slate-400">Liverpool</td>
            </tr>
            <tr>
              <td className="border border-slate-400">4</td>
              <td className="border border-slate-400">Chelsea</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border-collapse border border-blue-500 m-4">
        <div className="border border-blue-500 mt-1">Data1</div>
        <div className="border border-blue-500 mt-1">Data2</div>
      </div>

      <div className="flex justify-center items-center h-64">
        <button className="bg-blue-500 text-white p-4 rounded transition-all duration-300 hover:bg-red-500 hover:scale-110 ease-in-out">
          OK
        </button>
      </div>

      <div className="flex flex-col">
        <label>
          <input type="checkbox" checked />
          <span className="ml-4">Default Browser</span>
        </label>

        <label>
          <input type="checkbox" checked className="accent-pink-600" />
          <span className="ml-4">Google Chrome</span>
        </label>
      </div>

      <div>
        <textarea name="data" id="data" className="resize border"></textarea>
        <p className="select-none">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          explicabo iusto quam.
        </p>
      </div>

      <div className="flex flex-row flex-wrap w-3/2 mx-auto m-4 space-x-4">
        <div className="flex-none bg-pink-500 text-center text-white">01</div>
        <div className="flex-grow bg-pink-500 text-center text-white">02</div>
        <div className="flex-none bg-pink-500 text-center text-white">03</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-500">01</div>
        <div className="bg-blue-500">02</div>
        <div className="bg-blue-500">03</div>
        <div className="bg-blue-500">04</div>
        <div className="bg-blue-500 col-span-2">05</div>
        <div className="bg-blue-500">06</div>
        <div className="bg-blue-500">07</div>
        <div className="bg-blue-500">08</div>
      </div>

      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
        <div>10</div>
      </div>

      <div className="grid w-1/3 mx-auto h-64 grid-rows-3 grid-flow-col gap-2">
        <div className="bg-blue-500 row-span-3 text-center">01</div>
        <div className="bg-pink-500 text-center">02</div>
        <div className="bg-green-500 row-span-2 text-center">03</div>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 m-4">
        <div className="bg-blue-500 text-center text-white col-span-2">01</div>
        <div className="bg-blue-500 text-center text-white">02</div>
        <div className="bg-blue-500 text-center text-white">03</div>
        <div className="bg-blue-500 text-center text-white">04</div>
        <div className="bg-blue-500 text-center text-white">05</div>
        <div className="bg-blue-500 text-center text-white">06</div>
        <div className="bg-blue-500 text-center text-white">07</div>
        <div className="bg-blue-500 text-center text-white">08</div>
        <div className="bg-blue-500 text-center text-white">09</div>
      </div>

      <div className="grid grid-cols-3 auto-rows-[150px] gap-4">
        <div className="bg-blue-200">Item 1</div>
        <div className="bg-blue-200">Item 2</div>
        <div className="bg-blue-200">Item 3</div>
        <div className="bg-blue-200">Item 4</div>
        <div className="bg-blue-200">Item 5</div>
      </div>

      <div className="grid grid-flow-col m-4 gap-4 justify-items-stretch">
        <div className="bg-blue-500 text-white grid justify-items-center">
          01
        </div>
        <div className="bg-blue-500 text-white">02</div>
        <div className="bg-blue-500 text-white">03</div>
      </div>

      <div className="grid grid-cols-3 h-64 bg-slate-400 auto-rows-min gap-4 content-evenly">
        <div className="bg-blue-500 text-center text-white">01</div>
        <div className="bg-blue-500 text-center text-white">02</div>
        <div className="bg-blue-500 text-center text-white">03</div>
        <div className="bg-blue-500 text-center text-white">04</div>
        <div className="bg-blue-500 text-center text-white">05</div>
      </div>

      <div className="grid grid-cols-2 gap-2 m-4 h-64 bg-slate-200 space-x-2">
        <div className="bg-green-500 text-white text-center w-16 h-16">
          01
        </div>
        <div className="bg-green-500 text-white text-center w-16 h-16">
          02
        </div>
        <div className="bg-green-500 text-white text-center w-16 h-16">
          03
        </div>
        <div className="bg-green-500 text-white text-center w-16 h-16">
          04
        </div>
      </div>
    </div>
  );
}