import React, { useState } from "react";
import { StyledButton } from "../../style";
import { TodoI } from "../../types";
import { TodoItemContainer } from "./todoItem.styles";

interface TodoItemProps {
  todo: TodoI;
  todos: TodoI[];
  setTodos: any;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isEditingID, setIsEditingID] = useState<number>(0);
  const [editingText, setEditingText] = useState<string>("");

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
    //setAllTodos(allTodos - 1);
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
      <div>
        <input
          type="checkbox"
          onClick={() => toggleTodo(props.todo.id)}
        ></input>
        <StyledButton onClick={() => removeTodo(props.todo.id)}>x</StyledButton>
        <StyledButton onClick={() => setIsEditingID(props.todo.id)}>
          u
        </StyledButton>
      </div>
    );
  };

  return (
    <TodoItemContainer>
      <li>
        {isEditingID === props.todo.id ? (
          <form onSubmit={(event) => submitHandler(event)}>
            <input
              type="text"
              value={editingText}
              onChange={(event) => changeHandler(event)}
              onSubmit={() => submitHandler}
              required
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
