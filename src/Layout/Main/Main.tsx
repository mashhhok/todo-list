import React, { useState } from "react";
import { InputForm } from "../../components/InputForm/InputForm";
import { Todo } from "../../types";

// export interface Props {
//
// }
//
// export const Main:React.FC<Props> = ({
//
//     // const handleSubmit = () => {
//     //     putTodo(value)
//     //     setValue('')
//     // }
//     return (
// <div>
//     <ImportForm value={value} setValue={setValue} onSubmit={handleSubmit}/>
// </div>
// );
// })

const Main = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState("");

  const addTodo = (todoItem: Todo): void => {
    if (todoItem) {
      setTodos((todos) => [todoItem, ...todos]);
      setValue("");
      // setAllTodos(allTodos + 1);
    } else {
      alert("please, type the text");
    }
  };

  return (
    <div>
      <InputForm value={value} setValue={setValue} addTodo={addTodo} />
      {todos.map((todo) => (
        <li>{todo.name}</li>
      ))}
    </div>
  );
};

export default Main;
