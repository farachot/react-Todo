import React from "react";

function ListTodo() {
  return (
    <>
      <div className="flex mt-5 border-y align-middle border-black">
        <input type="checkbox" className="mx-2" />
        <div className="flex w-full justify-between">
          <h1 className="pt-3">belajar redux Lorem ipsum Lorem ipsum</h1>
          <div className=" flex flex-wrap gap-1 justify-center mx-2 my-2">
            <button className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-1 ">✏️</button>
            <button className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-1 ">Hapus</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListTodo;
