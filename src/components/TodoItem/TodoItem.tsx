import React, { useState } from "react";
import { TodoI } from "../../types";

import { TodoItemContainer } from "./todoItem.styles";
import { ControlElemsContainer } from "./todoItem.styles";
import { StyledInput } from "./todoItem.styles";

import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface TodoItemProps {
  todo: TodoI;
  todos: TodoI[];
  setTodos: any;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isEditingID, setIsEditingID] = useState<number>(0);
  const [editingText, setEditingText] = useState<string>(props.todo.name);

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

  const removeTodo = (id: number) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, todoItemText: string) => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          name: todoItemText,
        };
      })
    );
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingText(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editTodo(props.todo.id, editingText);
    setIsEditingID(0);
  };

  const getControlElems = () => {
    return (
      <ControlElemsContainer>
        <span>
          <DoneIcon
            fontSize="small"
            onClick={() => toggleTodo(props.todo.id)}
          ></DoneIcon>
        </span>
        <span>
          <DeleteIcon
            fontSize="small"
            onClick={() => removeTodo(props.todo.id)}
          ></DeleteIcon>
        </span>
        <span>
          <EditIcon
            fontSize="small"
            onClick={() => setIsEditingID(props.todo.id)}
          ></EditIcon>
        </span>
      </ControlElemsContainer>
    );
  };

  return (
    <TodoItemContainer>
      <li>
        {isEditingID === props.todo.id ? (
          <form onSubmit={(event) => submitHandler(event)}>
            <StyledInput
              type="text"
              value={editingText}
              onChange={(event) => changeHandler(event)}
              autoFocus
            />
          </form>
        ) : (
          <span onDoubleClick={() => setIsEditingID(props.todo.id)}>
            {props.todo.name}
          </span>
        )}
      </li>
      {getControlElems()}
    </TodoItemContainer>
  );
};
