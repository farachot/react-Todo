import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterALl, filterActive, filterDone, getTodo } from "../redux/action/actionTodo";

function FilterTodo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div className="flex gap-2 mx-2 mt-2">
      <button onClick={() => dispatch(filterALl())} className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-2">
        ALL
      </button>
      <button onClick={() => dispatch(filterActive())} className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-2">
        Belum Selesai
      </button>
      <button onClick={() => dispatch(filterDone())} className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-2">
        Selesai
      </button>
    </div>
  );
}

export default FilterTodo;
