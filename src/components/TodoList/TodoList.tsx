import React from "react";
import { useAppSelector } from "../../store/hooks";
import { TodoI } from "../../types";
import { TodoItem } from "../TodoItem/TodoItem";
import { StyleUl } from "./Todolist.styles";
import { StatusMessage } from "./Todolist.styles";

type TodoItemsList = {
  setTaskId: React.Dispatch<React.SetStateAction<number>>;
  filteredTodos: TodoI[];
  status: string;
};

export const TodoList: React.FC<TodoItemsList> = (props) => {
  const loading = useAppSelector((state) => state.ui.loading);

  const getTodos = (status: string) => {
    return props.filteredTodos.length !== 0 && props.status === status ? (
      <StyleUl>
        {props.filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTaskId={props.setTaskId} />
        ))}
      </StyleUl>
    ) : !loading ? (
      <StatusMessage>Loading data!...</StatusMessage>
    ) : (
      <StatusMessage>{status} todos is empty!</StatusMessage>
    );
  };

  return <div>{getTodos(props.status)}</div>;
};
