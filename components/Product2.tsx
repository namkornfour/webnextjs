import React, { useState, Dispatch, ChangeEvent } from "react";
import { Action, ActionType } from "@/store/reducer";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface State {
  data: Product[];
}

interface ProductProps {
  data: Product;
  dispatch: Dispatch<Action>;
}

export default function Product2(props: ProductProps) {
  const { data, dispatch } = props;
  const [isShowing, setIsshowing] = useState(false);

  const [form, setForm] = useState({
    id: data.id || 0,
    name: data.name || "",
    price: data.price || 0,
  });

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const newData = { ...form };

    if (name == "id" || name == "price") {
      newData[name as "id" | "price"] = Number(value);
    } else {
      newData[name as "name"] = value;
    }

    setForm(newData);
  }

  function deleteHandler() {
    dispatch({type: ActionType.delete, payload : data.id});    
  }

  function editHandler() {
    dispatch({type: ActionType.edit, payload: {
      id: data.id,
      name: form.name,
      price: form.price,
    }});

    showHideHandler();
  }

  function showHideHandler() {
    setIsshowing(!isShowing);
  }

  return (
  <div key={data.id}>
    <div>{data.name}</div>
    <div>{data.price}</div>

    <div>
      <button onClick={showHideHandler}>{isShowing ? 'Hide': 'Edit'}</button>
      <button onClick={deleteHandler}>Delete</button>

      {
        isShowing && 
        <div>
          <input type="text" name="name" value={form.name} onChange={onInputChange} />
          <input type="number" name="price" value={form.price} onChange={onInputChange} />
          <button onClick={editHandler}>Save</button>
        </div>
      }
    </div>
  </div>
  )
}
