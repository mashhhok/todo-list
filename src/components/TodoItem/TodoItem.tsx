import React, { useState } from "react";
import { TodoI } from "../../types";

import { StyledSpan, TodoItemContainer } from "./todoItem.styles";
import { ControlElementsContainer } from "./todoItem.styles";
import { StyledInput } from "./todoItem.styles";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch } from "../../store/hooks";
import { todoListActions } from "../../store/todoListSlice";
import { uiActions } from "../../store/uiSlice";

interface TodoItemProps {
  setTaskId: React.Dispatch<React.SetStateAction<number>>;
  todo: TodoI;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isEditingID, setIsEditingID] = useState<number>(0);
  const [editingText, setEditingText] = useState<string>(props.todo.name);

  const dispatch = useAppDispatch();

  const toggleTodoHandler = (id: number) => {
    dispatch(todoListActions.toggleTodo(id));
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingText(event.target.value);
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(
      todoListActions.updateTodo({ id: props.todo.id, newText: editingText })
    );
    setIsEditingID(0);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEditingID(props.todo.id);
    dispatch(
      todoListActions.updateTodo({ id: props.todo.id, newText: editingText })
    );
    setIsEditingID(0);
  };

  const toggleModalWindowHandler = () => {
    dispatch(uiActions.toggleWindow());
  };

  const getControlElements = () => {
    return (
      <ControlElementsContainer>
        <span data-testid="task-span">
          {props.todo.complete ? (
            <TaskAltIcon
              data-testid="task-copmleted"
              fontSize="small"
              color="primary"
              onClick={() => toggleTodoHandler(props.todo.id)}
            />
          ) : (
            <TaskAltIcon
              data-testid="task-not-copmleted"
              fontSize="small"
              onClick={() => toggleTodoHandler(props.todo.id)}
            />
          )}
        </span>
        <span>
          <DeleteIcon
            fontSize="small"
            onClick={() => {
              toggleModalWindowHandler();
              props.setTaskId(props.todo.id);
            }}
          ></DeleteIcon>
        </span>
        <span>
          <EditIcon
            fontSize="small"
            onClick={() => {
              setIsEditingID(props.todo.id);
            }}
          ></EditIcon>
        </span>
      </ControlElementsContainer>
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
              onBlur={(event) => blurHandler(event)}
              autoFocus
            />
          </form>
        ) : (
          <StyledSpan
            onDoubleClick={() => setIsEditingID(props.todo.id)}
            data-testid="task-name"
          >
            {props.todo.name}
          </StyledSpan>
        )}
      </li>
      {getControlElements()}
    </TodoItemContainer>
  );
};
