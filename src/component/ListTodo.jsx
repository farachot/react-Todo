import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/action/actionTodo";

function ListTodo() {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(getTodo());
  }, []);
  console.log(todos);
  return (
    <>
      {isLoading ? (
        <div className="text-center">...loading</div>
      ) : (
        todos.map((item) => (
          <div key={item.id} className="flex mt-5 border-y align-middle border-black">
            <input type="checkbox" className="mx-2" />
            <div className="flex w-full justify-between">
              <h1 className="pt-3">{item.name}</h1>
              <div className=" flex flex-wrap gap-1 justify-center mx-2 my-2">
                <button className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-1 ">✏️</button>
                <button className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-1 ">Hapus</button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default ListTodo;
