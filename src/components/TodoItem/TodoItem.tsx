import React, { useState } from "react";
import { TodoI } from "../../types";

import { TodoItemContainer } from "./todoItem.styles";
import { ControlElemsContainer } from "./todoItem.styles";
import { StyledInput } from "./todoItem.styles";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { todoListActions, Todos } from "../../store/todoListSlice";
import { sendTodoListData } from "../../store/todoList-actions";

interface TodoItemProps {
  setTaskId: React.Dispatch<React.SetStateAction<number>>;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  todo: TodoI;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isEditingID, setIsEditingID] = useState<number>(0);
  const [editingText, setEditingText] = useState<string>(props.todo.name);

  const todoList = useAppSelector((state) => state.todos.todoList);
  const dispatch = useAppDispatch();

  const toggleTodoHandler = (id: number) => {
    dispatch(todoListActions.toggleTodo(id));
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingText(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      todoListActions.updateTodo({ id: props.todo.id, newText: editingText })
    );
    // editTodo(props.todo.id, editingText);
    setIsEditingID(0);
  };

  // const updateTodoHandler = (todoList: TodoI[]) => {
  //   dispatch(sendTodoListData(todoList));
  // };

  const getControlElems = () => {
    return (
      <ControlElemsContainer>
        <span>
          {props.todo.complete ? (
            <TaskAltIcon
              fontSize="small"
              color="primary"
              onClick={() => toggleTodoHandler(props.todo.id)}
            />
          ) : (
            <TaskAltIcon
              fontSize="small"
              onClick={() => toggleTodoHandler(props.todo.id)}
            />
          )}
        </span>
        <span>
          <DeleteIcon
            fontSize="small"
            onClick={() => {
              props.setModalActive(true);
              props.setTaskId(props.todo.id);
            }}
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
