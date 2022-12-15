import React from "react";
import { TodoI } from "../../types";

interface TodoItemProps {
  todo: TodoI;
  todos: TodoI[];
  setTodos: any;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const toggleTodo = (id: number) => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  return (
    <li>
      {props.todo.name}
      <input type="checkbox" onClick={() => toggleTodo(props.todo.id)}></input>
    </li>
  );
};
