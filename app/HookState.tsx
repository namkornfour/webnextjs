"use client";

import React, { useState } from "react";

function HookState() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  function changeUser(data : any) : void {
    setUsername(data.target.value);
  }
  
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      <div>HookState</div>
      <div>
        <p>จำนวน {count}</p>

        <button className="bg-blue-500 text-sm text-center" onClick={increase}>Increment</button><br /><br />
        <button className="bg-red-500 text-sm text-center" onClick={decrease}>Decrement</button>
        
      </div>

      <div>
        <label htmlFor="username">Username : </label>
        <input type="text" className="border-2" onChange={changeUser}></input>
      </div>

      <div>{username}</div>
    </div>
  );
}

export default HookState;
