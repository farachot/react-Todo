import axios from "axios";
// aksi fetch
export function fetching() {
  return {
    type: "FETCH",
  };
}
// aksi sukses
export function succes(data) {
  return {
    type: "SUKSES",
    payload: data,
  };
}
// aksi filter done
export function filterDone() {
  return {
    type: "DONE",
  };
}
//  aksi filte active
export function filterActive() {
  return {
    type: "AKTIF",
  };
}
// aksi mendapat data dari API
export function getTodo() {
  return async function (dispatch) {
    dispatch(fetching());

    const { data } = await axios("https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang");

    dispatch(succes(data));
  };
}
// aksi menambah data ke API
export function addTodo(input) {
  return async function (dispatch) {
    dispatch(fetching());

    await axios.post("https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang", input);

    dispatch(getTodo());
  };
}
// aksi menghapus data API
export function deleteTodo(id) {
  return async function (dispatch) {
    dispatch(fetching());

    await axios.delete(`https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang/${id}`);

    dispatch(getTodo());
  };
}
// aksi edit data APi
export function editTodo(id, input) {
  return async function (dispatch) {
    dispatch(fetching());

    await axios.put(`https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang/${id}`, input);

    dispatch(getTodo());
  };
}

// export function getDone() {
//   return async function (dispatch) {
//     dispatch(fetching());

//     const { data } = await axios("https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang");
//     data.filter(function (item) {
//       return item.status === true;
//     });
//     dispatch(filterDone(data));
//   };
// }

// export function getActive() {
//   return async function (dispatch) {
//     dispatch(fetching());

//     const { data } = await axios("https://652d214cf9afa8ef4b26d419.mockapi.io/dataorang");
//     data.filter(function (item) {
//       return item.status === true;
//     });
//     dispatch(filterActive(data));
//   };
// }
