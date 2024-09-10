import React, { useState, useRef, ChangeEvent } from "react";
import { Action, ActionType } from "@/store/reducer";

interface AddProductForm2Props {
  dispatch: React.Dispatch<Action>;
}

export default function AddProductForm2({ dispatch }: AddProductForm2Props) {
  const productNameInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: 0,
  });

  function onInputchange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "price" ? Number(value) : value,
    }));
  }

  function addHandler() {
    const id = Number(Math.random().toString() + Date.now().toString());
    const name = form.name;
    const price = Number(form.price);
    const isShowing = false;
    dispatch({ type: ActionType.add, payload: { id, name, price } });

    clearForm();
  }

  function clearForm() {
    if (productNameInput.current) productNameInput.current.value = "";
    if (priceInput.current) priceInput.current.value = "";
  
    setForm({ id: "", name: "", price: 0 });
  }

  return (
    <div className="flex justify-center w-3/4">
      <div className="flex flex-col w-full">
        <label htmlFor="name">ProductName</label>
        <input
          type="text"
          name="name"
          ref={productNameInput}
          onChange={onInputchange}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          ref={priceInput}
          onChange={onInputchange}
        />
      </div>

      <div>
        <button className="btn btn-primary" onClick={addHandler}>
          Add
        </button>
      </div>
    </div>
  );
}
