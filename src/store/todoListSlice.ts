import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { TodoI } from "../types";
import { fetchTodoListData as fetchTodos } from "./todoList-actions";

export interface Todos {
  todoList: TodoI[];
  loading: boolean;
  error: null | unknown;
  changed: boolean;
}

const initialState: Todos = {
  todoList: [],
  loading: false,
  error: null,
  changed: false,
};

const todoListSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    replaceTodoList(state, action) {
      state.todoList = action.payload.todoList;
    },
    addTodo(state, action) {
      const newTodo: TodoI = {
        id: Date.now(),
        name: action.payload.name,
        complete: false,
        description: "",
      };
      state.changed = true;
      if (!action.payload.newTodo) {
        if (newTodo.name.trim().length === 0) return;
        state.todoList.push(newTodo);
      } else {
        alert("please, type the text");
      }
    },
    removeTodo(state, action) {
      const id = action.payload;
      state.changed = true;
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
    toggleTodo(state, action) {
      const id = action.payload;
      const todo = state.todoList.find((todo) => todo.id === id);
      state.changed = true;
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
    updateTodo(state, action) {
      const { id, newText } = action.payload;
      const todo = state.todoList.find((todo) => todo.id === id);
      state.changed = true;
      if (todo) {
        todo.name = newText;
      }
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        // state.todoList = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const todoListActions = todoListSlice.actions;

export default todoListSlice;
