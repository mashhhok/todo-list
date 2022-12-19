import React, { useState } from "react";
import { InputForm } from "../../components/InputForm/InputForm";

import { TodoList } from '../../components/ToDoList/TodoList'
import { TodoI } from "../../types";

const Main = () => {
  const [todos, setTodos] = useState<TodoI[]>([]);
  const [isEditingID, setIsEditingID] = useState<string>("");
  const [editingText, setEditingText] = useState<string>("");

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
      <TodoList todos={todos} setTodos={setTodos} />
      {/* {todos.map((todo) => (
        <li>{todo.name}</li>
      ))} */}
    </div>
  );
};
export default Main;
