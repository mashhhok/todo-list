import React, { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import { todoListActions } from "../../store/todoListSlice";
import { TodoI } from "../../types";
import { InputToDo } from "./inputForm.styles";

// export interface FormProps {
//   addTodo: (inputValue: string) => void;
// }

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
    // props.addTodo(value);
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
