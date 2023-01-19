import { createSlice } from "@reduxjs/toolkit";
import { TodoI } from "../types";

export interface Todos {
  todoList: TodoI[];
  changed: boolean;
}

const initialState: Todos = {
  todoList: [],
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
  },
});

export const todoListActions = todoListSlice.actions;

export default todoListSlice;
