import React from "react";

function InputTodo() {
  return (
    <>
      <div className="flex justify-center">
        <input type="text" className="border rounded-sm border-black px-2 py-1 w-full mx-2" />
        <button className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center w-11 mr-2">Add</button>
      </div>
    </>
  );
}

export default InputTodo;
