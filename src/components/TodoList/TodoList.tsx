import React from "react";
import { TodoI } from "../../types";
import { TodoItem } from "../TodoItem/TodoItem";
type TodoItemsList = {
  todos: TodoI[];
  setTodos: any;
};
export const TodoList: React.FC<TodoItemsList> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={props.todos}
          setTodos={props.setTodos}
        />
      ))}
    </ul>
  );
};
