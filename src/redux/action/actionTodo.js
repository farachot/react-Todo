import axios from "axios";

export function addTodo() {
  return {
    type: "ADD",
  };
}

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

export function getTodo() {
  return async function (dispatch) {
    dispatch(fetching());

    const { data } = await axios("https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang");

    dispatch(succes(data));
  };
}
