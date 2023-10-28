import axios from "axios";

export function fetching() {
  return {
    type: "FETCH",
  };
}

export function succes(data) {
  return {
    type: "SUKSES",
    payload: data,
  };
}

export function filterDone() {
  return {
    type: "DONE",
  };
}

export function getTodo() {
  return async function (dispatch) {
    dispatch(fetching());

    const { data } = await axios("https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang");

    dispatch(succes(data));
  };
}

export function addTodo(input) {
  return async function (dispatch) {
    dispatch(fetching());

    await axios.post("https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang", input);

    dispatch(getTodo());
  };
}

export function deleteTodo(id) {
  return async function (dispatch) {
    dispatch(fetching());

    await axios.delete(`https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang/${id}`);

    dispatch(getTodo());
  };
}
