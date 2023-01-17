import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoI } from "../types";

export interface Todos {
  todoList: TodoI[];
}

const initialState: Todos = {
  todoList: [],
};

const todoListSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo: TodoI = {
        id: Date.now(),
        name: action.payload.name,
        complete: false,
        description: "",
      };
      if (!action.payload.newTodo) {
        if (newTodo.name.trim().length === 0) return;
        state.todoList.push(newTodo);
      } else {
        alert("please, type the text");
      }
    },
    removeTodo(state, action) {
      const id = action.payload;
      // const removeTodo = (id: number) => {
      //   setTodos(todos.filter((todo) => todo.id !== id));
      // };
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
    toggleTodo(state, action) {
      // const toggleTodo = (id: number) => {
      //   props.setTodos(
      //     todoList.map((todo) => {
      //       if (todo.id !== id) return todo;
      //       return {
      //         ...todo,
      //         complete: !todo.complete,
      //       };
      //     })
      //   );
      // };
      const id = action.payload;
      const todo = state.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
  },
});

export const todoListActions = todoListSlice.actions;

export default todoListSlice;
