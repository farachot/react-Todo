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

    default:
      return state;
  }
}

export default todoReducer;
