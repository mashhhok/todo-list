import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoI } from "../types";
import { todoListActions } from "./todoListSlice";
import { uiActions } from "./uiSlice";

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
export const fetchTodoListData = () => {
  return async (dispatch: any) => {
    // Set loading true
    dispatch(uiActions.showNotification(false));
    // I don't know which type I should pass to dispatch
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}todoList.json`);
      if (!response.ok) {
        throw new Error("Could not fetch TodoList data!");
      }
      const data = await response.json();
      dispatch(uiActions.showNotification(false));
      // Set loading false
      return data;
    };
    try {
      const todoListData = await fetchData();
      dispatch(todoListActions.replaceTodoList(todoListData));
    } catch (err) {
      dispatch(uiActions.showNotification(true));
      // Set loading false
      console.log(err);
    }
  };
};
