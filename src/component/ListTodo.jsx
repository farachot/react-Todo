import React from "react";

function ListTodo() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-60 justify-between">
          <input type="checkbox" />
          <h1>belajar redux</h1>
          <div className="mr-0">
            <button>Edit</button>
            <button>Hapus</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListTodo;
