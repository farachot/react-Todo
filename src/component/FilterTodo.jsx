import React from "react";

function FilterTodo() {
  return (
    <div className="flex gap-2 mx-2 mt-2">
      <button className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-2">ALL</button>
      <button className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-2">Belum Selesai</button>
      <button className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-2">Selesai</button>
    </div>
  );
}

export default FilterTodo;
