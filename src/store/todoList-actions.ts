import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoI } from "../types";
import { todoListActions } from "./todoListSlice";

const baseUrl =
  "https://ts-todo-list-873d9-default-rtdb.europe-west1.firebasedatabase.app/";

// Send data to data base
export const sendTodoListData = createAsyncThunk(
  "todoList/sendTodoListData",
  async (data: TodoI[]) => {
    try {
      const response = await fetch(`${baseUrl}todoList.json`, {
        method: "PUT",
        body: JSON.stringify({
          todoList: data,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error("Could not send todoList data to data base!");
      }
      return responseData;
    } catch (err) {
      console.log(err);
    }
  }
);

// Get data from data base
export const fetchTodoListData = createAsyncThunk(
  "todoList/fetchTodoList",
  async (dispatch: any) => {
    // I don't know which type I should pass to dispatch

    dispatch(todoListActions.setLoading(true));

    const fetchData = async () => {
      const response = await fetch(`${baseUrl}todoList.json`);
      if (!response.ok) {
        throw new Error("Could not fetch TodoList data!");
      }
      const data = await response.json();
      dispatch(todoListActions.setLoading(false));

      return data;
    };

    try {
      const todoListData = await fetchData();
      dispatch(todoListActions.replaceTodoList(todoListData));
    } catch (err) {
      dispatch(todoListActions.setLoading(false));

      console.log(err);
    }
  }
);
