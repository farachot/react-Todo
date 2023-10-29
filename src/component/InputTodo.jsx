import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/actionTodo";

function InputTodo() {
  const dispatch = useDispatch();
  // use state untuk add todo
  const [input, setInput] = useState("");
  // fungsi menambah todo baru
  function handleClick() {
    const newTodo = {
      name: input,
      status: false,
    };
    dispatch(addTodo(newTodo));
    setInput("");
  }

  return (
    <>
      <div className="flex justify-center">
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="border rounded-sm border-black px-2 py-1 w-full mx-2" />
        <button onClick={handleClick} className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center w-11 mr-2">
          Add
        </button>
      </div>
    </>
  );
}

export default InputTodo;
