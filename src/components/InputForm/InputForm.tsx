import React, { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import { todoListActions } from "../../store/todoListSlice";
import { InputToDo } from "./inputForm.styles";

export const InputForm: React.FC = () => {
  const [value, setValue] = useState("");
  const textInput: React.RefObject<HTMLInputElement> =
    createRef<HTMLInputElement>();

  const dispatch = useDispatch();

  const addTodo = (text: string) => {
    dispatch(todoListActions.addTodo({ name: text }));
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <InputToDo>
        <input
          placeholder={"Add new task..."}
          type="text"
          className={"add-text"}
          ref={textInput}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoFocus
        />
      </InputToDo>
    </form>
  );
};
