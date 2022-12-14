import React, { useRef } from "react";
import { Todo } from "../../types";

export interface FormProps {
  value: string;
  setValue: any; //React.Dispatch<React.SetStateAction<string>>
  addTodo: (todoItem: Todo) => void;
}

export const InputForm: React.FC<FormProps> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) return;
    const newTodo = { id: Date.now(), name: enteredText, complete: false };
    props.addTodo(newTodo);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value);
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
          ref={todoTextInputRef}
          type="text"
          value={props.value}
          onChange={changeHandler}
        />
        <button type="submit">&rarr;</button>
      </div>
    </form>
  );
};
