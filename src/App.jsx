import FilterTodo from "./component/FilterTodo";
import InputTodo from "./component/InputTodo";
import ListTodo from "./component/ListTodo";

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <div className="flex justify-center">
          <div className="border border-solid border-black rounded-sm w-[600px] min-h-screen pt-5 bg-white ">
            <h1 className="text-3xl w-full text-center mb-2">Todo List</h1>
            <InputTodo />
            <FilterTodo />
            <ListTodo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
