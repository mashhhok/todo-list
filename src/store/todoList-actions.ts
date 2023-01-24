import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoI } from "../types";
import { todoListActions } from "./todoListSlice";

const baseUrl =
  "https://ts-todo-list-873d9-default-rtdb.europe-west1.firebasedatabase.app/";

// Send data to data base
export const sendTodoListData = createAsyncThunk(
  "todoList/sendTodoListData",
  async (data: TodoI[]) => {
    const sendRequest = async () => {
      const response = await fetch(`${baseUrl}todoList.json`, {
        method: "PUT",
        body: JSON.stringify({
          todoList: data,
        }),
      });
      if (!response.ok) {
        throw new Error("Could not send todoList data to data base!");
      }
    };
    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  }
);

// Get data from data base
export const fetchTodoListData = createAsyncThunk(
  "todos/fetchTodos",
  async (dispatch: any) => {
    // Set loading true
    dispatch(todoListActions.setLoading(true));

    // I don't know which type I should pass to dispatch
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}todoList.json`);
      if (!response.ok) {
        throw new Error("Could not fetch TodoList data!");
      }
      const data = await response.json();
      // Set loading false
      dispatch(todoListActions.setLoading(false));

      return data;
    };

    try {
      const todoListData = await fetchData();
      dispatch(todoListActions.replaceTodoList(todoListData));
    } catch (err) {
      // Set loading false
      dispatch(todoListActions.setLoading(false));

      console.log(err);
    }
  }
);
