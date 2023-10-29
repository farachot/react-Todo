import { getTodo } from "../action/actionTodo";

const initialValue = {
  todos: [],
  isLoading: false,
};

function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        isLoading: true,
      };
    case "SUKSES":
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case "DONE":
      return {
        ...state,
        isLoading: false,
        todos: state.todos.filter(function (item) {
          return item.status === true;
        }),
      };
    case "AKTIF":
      return {
        ...state,
        isLoading: false,
        todos: state.todos.filter(function (item) {
          return item.status === false;
        }),
      };

    default:
      return state;
  }
}

export default todoReducer;
