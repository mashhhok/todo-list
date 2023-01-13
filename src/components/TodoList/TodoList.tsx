import React from "react";
import { TodoI } from "../../types";
import { TodoItem } from "../TodoItem/TodoItem";
import { StyleUl } from "./Todolist.styles";
import { StatusMessage } from "./Todolist.styles";

type TodoItemsList = {
  setTaskId: React.Dispatch<React.SetStateAction<number>>;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  todos: TodoI[];
  setTodos: any;
  filteredTodos: TodoI[];
  status: string;
};

export const TodoList: React.FC<TodoItemsList> = (props) => {
  const getTodos = (status: string) => {
    return props.filteredTodos.length !== 0 && props.status === status ? (
      <StyleUl>
        {props.filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={props.todos}
            setTodos={props.setTodos}
            setTaskId={props.setTaskId}
            setModalActive={props.setModalActive}
          />
        ))}
      </StyleUl>
    ) : (
      <StatusMessage>{status} todos is empty!</StatusMessage>
    );
  };

  return <div>{getTodos(props.status)}</div>;
};
