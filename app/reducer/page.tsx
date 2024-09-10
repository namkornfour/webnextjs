"use client";

import React, { useReducer } from "react";

export default function ReducerPage() {
  interface StateType {
    team: string;
  }

  interface ActionType {
    type: "FOOTBALL1" | "FOOTBALL2" | "FOOTBALL3" | "FOOTBALL4";
  }

  const initialState: StateType = {
    team: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
      case "FOOTBALL1":
        return { ...state, team: "Arsenal" };
      case "FOOTBALL2":
        return { ...state, team: "Mancity" };
      case "FOOTBALL3":
        return { ...state, team: "Liverpool" };
      case "FOOTBALL4":
        return { ...state, team: "AstalVilla" };
      default:
        return state;
    }
  }

  function clickHandle(action: ActionType["type"]) {
    dispatch({ type: action });
  }

  return (
    <div className="flex flex-col justify-center mx-auto w-1/2 bg-blue-300">
      <h1 className="text-center">Select Team : {state.team}</h1>
      <button onClick={() => clickHandle("FOOTBALL1")}>1st</button>
      <button onClick={() => clickHandle('FOOTBALL2')}>2nd</button>
      <button onClick={() => clickHandle('FOOTBALL3')}>3rd</button>
      <button onClick={() => clickHandle('FOOTBALL4')}>4th</button>
    </div>
  );
}
