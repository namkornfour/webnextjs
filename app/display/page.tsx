import React from "react";

export default function DisplayPage() {
  return (
    //  <div className="flex flex-col w-2/3 flex-wrap h-screen mx-auto bg-blue-400 gap-1">
    //     <div className="bg-red-400 w-32 h-32">1</div>
    //     <div className="bg-red-400 w-32 h-32">2</div>
    //     <div className="bg-red-400 w-32 h-32">3</div>
    //     <div className="bg-red-400 w-32 h-32">4</div>
    //     <div className="bg-red-400 w-32 h-32">5</div>
    //     <div className="bg-red-400 w-32 h-32">6</div>
    //     <div className="bg-red-400 w-32 h-32">7</div>
    //  </div>

    // <div className="grid grid-cols-3 gap-1 h-screen bg-base-200 justify-items-start">
    //   <div className="bg-red-400 w-32 h-32">1</div>
    //   <div className="bg-red-400 w-32 h-32 justify-self-center">2</div>
    //   <div className="bg-red-400 w-32 h-32 justify-self-end">3</div>
    //   <div className="bg-red-400 w-32 h-32">4</div>
    //   <div className="bg-red-400 w-32 h-32">5</div>
    //   <div className="bg-red-400 w-32 h-32">6</div>
    //   <div className="bg-red-400 w-32 h-32">7</div>
    // </div>

<div className="grid grid-cols-3 w-2/3 gap-2 h-screen place-items-start">
<div className="bg-red-400 w-16 h-16">1</div>
<div className="bg-red-400 w-16 h-16">2</div>
<div className="bg-red-400 w-16 h-16">3</div>
<div className="bg-red-400 w-16 h-16">4</div>
</div>
  );
}