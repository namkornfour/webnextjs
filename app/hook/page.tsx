"use client";

import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  HTMLInputAutoCompleteAttribute,
} from "react";
import { useRouter } from "next/navigation";

export default function HookPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const data = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [style, setStyle] = useState("");

  const goHome = () => {
    router.push("/");
  };

  const getUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const getRandom = () => {
    const dataRandom = Math.round(Math.random() * 10);
    data.current = dataRandom;
    alert(data.current);
  };

  const handlePassword = () => {
    if (inputRef.current) {
      const lenPassword = inputRef.current.value.length;

      if (lenPassword >= 8) {
        setStyle("ring-2 ring-green-500");
      } else {
        setStyle("ring-2 ring-red-500");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center mx-auto text-center">
      <div>
        <button className="btn btn-primary" onClick={goHome}>
          Home
        </button>{" "}
      </div>
      <div>
        <p>State</p>
        <form>
          <label htmlFor="username" className="pr-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border border-blue-500"
            onChange={getUsername}
          />
        </form>
      </div>
      <div>{username}</div>

      <div>
        <label htmlFor="password" className="pr-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`border border-blue-500 ${style}`}
          ref={inputRef}
          onChange={handlePassword}
        />
      </div>
      <br />

      <div>
        <button className="btn btn-secondary" onClick={getRandom}>
          Random Ref Hook
        </button>
      </div>
    </div>
  );
}
