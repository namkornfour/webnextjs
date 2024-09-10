"use client";

import React, { useState, createContext, useContext, useReducer } from "react";
const FamilyContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
  } | null>(null);

interface State {
    count: number;
}

const initialState : State = {count : 0};
    
export enum ActionType {
    random = 'SET_REMAIN'
}
interface RandomAction {
    type: ActionType.random;    
}

type Action = RandomAction;

export default function GrandFatherPage() {
  //const [state, setState] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state : State, action : Action) {
    switch (action.type) {
      case ActionType.random:
        const random = Math.round(Math.random() * 9) + 1;
        return {count: random}
      default:
        return state;
    }
  }

  return (
    <FamilyContext.Provider value={{state, dispatch}}>
      <div className="p-8">
        <div>Grand Father Component</div>
        <div className="text-3xl">{state.count}</div>
        <hr className="py-1" />
        <Father />
      </div>
    </FamilyContext.Provider>
  );
}

function Father() {
  return (
    <div>
      <div>Father Component</div>
      <hr className="py-1" />
      <Son />
    </div>
  );
}

function Son() {
  return (
    <div>
      <div>Son Component</div>
      <hr className="py-1" />
      <Child />
    </div>
  );
}

function Child() {
  const context = useContext(FamilyContext);

  if (!context) {
    throw new Error("Context is null");
  }

    const {state, dispatch} = context;

  //const [state, setState] = context;

  function clickHandler() {
    //const randomNumber = Math.round(Math.random() * 9) + 1;
    // setState(randomNumber);
    dispatch({type: ActionType.random});
  }

  return (
    <div className="flex flex-col">
      <div>Child Component</div>
      <button onClick={clickHandler}>Random</button>
      <div>{state.count}</div>
    </div>
  );
}
