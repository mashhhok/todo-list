import React, { createRef, useState } from "react";
import { InputToDo } from "./inputForm.styles";

export interface FormProps {
  addTodo: (inputValue: string) => void;
}

export const InputForm: React.FC<FormProps> = (props) => {
  const [value, setValue] = useState("");
  const textInput: React.RefObject<HTMLInputElement> =
    createRef<HTMLInputElement>();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.addTodo(value);
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
