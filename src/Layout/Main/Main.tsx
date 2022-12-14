import React, { useState } from "react";
import { InputForm } from "../../components/InputForm/InputForm";
import { TodoI } from "../../types";

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
  const [todos, setTodos] = useState<TodoI[]>([]);

  const addToList = (todoItem: string): void => {
    if (todoItem) {
      if (todoItem.trim().length === 0) return
      const newTodo = { id: Date.now(), name: todoItem, complete: false }
      setTodos([...todos, newTodo]);
      // setAllTodos(allTodos + 1);
    } else {
      alert("please, type the text");
    }
  };

  return (
    <div>
      <InputForm addTodo={addToList}/>
      {todos.map((todo) => (
        <li>{todo.name}</li>
      ))}
    </div>
  );
};

export default Main;
