"use client";

import React, { useRef} from "react";

function TestUseRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <input ref = {inputRef} type="text" placeholder="focus on me" />
      <br />
      <button onClick={focusInput}>Click me</button>
    </div>
  );
}

export default TestUseRef;
