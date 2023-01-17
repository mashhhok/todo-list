import React from "react";
import { useAppSelector } from "../../store/hooks";
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
  const todoList = useAppSelector((state) => state.todos.todoList);
  console.log(todoList);

  const getTodos = (status: string) => {
    return todoList?.length !== 0 && props.status === status ? (
      <StyleUl>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
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
