import React, { useState } from "react";

export interface FormProps {
  addTodo: (inputValue: string) => void;
}

export const InputForm: React.FC<FormProps> = (props) => {
  const [value, setValue] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.addTodo(value);
    setValue("");
  };

  // const toggleTodo = (id: any) => {
  //     setTodos(
  //         todos.map((todo) => {
  //             if (todo.id !== id) return todo;
  //
  //             return {
  //                 ...todo,
  //                 done: !todo.done,
  //             };
  //         })
  //     );
  // };

  return (
    <form
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <div>
        <input
          placeholder={"Please, add the text"}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">&rarr;</button>
      </div>
    </form>
  );
};
