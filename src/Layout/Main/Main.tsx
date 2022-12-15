import React, { useState } from "react";
import { InputForm } from "../../components/InputForm/InputForm";
import { TodoList } from "../../components/TodoList/TodoList";
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
  const [todos, setTodos] = useState<TodoI[]>([
    { id: 1, name: "text", complete: false },
  ]);

  const addToList = (todoItemText: string): void => {
    if (todoItemText) {
      if (todoItemText.trim().length === 0) return;
      const newTodo = { id: Date.now(), name: todoItemText, complete: false };
      setTodos([...todos, newTodo]);
      // setAllTodos(allTodos + 1);
    } else {
      alert("please, type the text");
    }
  };

  return (
    <div>
      <InputForm addTodo={addToList} />
      <TodoList todos={todos} />
      {/* {todos.map((todo) => (
        <li>{todo.name}</li>
      ))} */}
    </div>
  );
};

export default Main;
