import { getTodo } from "../action/actionTodo";

const initialValue = {
  todos: [],
  isLoading: false,
  status: "all",
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
        status: true,
      };
    case "AKTIF":
      return {
        ...state,
        isLoading: false,
        status: false,
      };
    case "ALL":
      return {
        ...state,
        isLoading: false,
        status: "all",
      };

    default:
      return state;
  }
}

export default todoReducer;
