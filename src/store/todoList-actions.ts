import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todos } from "./todoListSlice";

// export const sendTodoListData = async (data: Todos) => {
//   const sendRequest = async () => {
//     const response = await fetch(
//       "https://ts-todo-list-873d9-default-rtdb.europe-west1.firebasedatabase.app/todoList.json",
//       {
//         method: "PUT",
//         body: JSON.stringify({
//           items: data.todoList,
//         }),
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Sending cart data failed.");
//     }
//   };
//   try {
//     await sendRequest();
//   } catch (err) {
//     console.log(err);
//   }
// };

export const sendTodoListData = createAsyncThunk(
  "todoList/sendTodoListData",
  async (data) => {
    try {
      const response = await fetch(
        "https://ts-todo-list-873d9-default-rtdb.europe-west1.firebasedatabase.app/todoList.json",
        {
          method: "POST",
          body: JSON.stringify({
            todoList: data,
          }),
        }
      );
      return response.formData;
    } catch (err) {
      console.log(err);
    }
  }
);

// export const postData = createAsyncThunk(
//   "type/postData",
//   async (data) => {
//     try {
//       const response = await axios.post("https://reqres.in/api/users", data);
//       // If you want to get something back
//       return response.data;
//     } catch (err) {
//       console.error(err)
//     }
//   }
// );
