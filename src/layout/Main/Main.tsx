import React, { useState, useEffect } from "react";
import { FilterTodo } from "../../components/FilterTodo/FilterTodo";
import { InputForm } from "../../components/InputForm/InputForm";

import { TodoList } from "../../components/ToDoList/TodoList";

import { TodoI } from "../../types";

const Main = () => {
  const [todos, setTodos] = useState<TodoI[]>([]);
  // const [allComplete, setAllComplete] = useState<number>(0);

  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState<TodoI[]>([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  // useEffect(() => {
  //   setAllComplete(todos.filter((todo) => todo.complete === true).length);
  // }, [todos]);

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
      <TodoList
        status={status}
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
      <FilterTodo filteredTodos={filteredTodos} setStatus={setStatus} />
      {/* {todos.map((todo) => (
        <li>{todo.name}</li>
      ))} */}
    </div>
  );
};
export default Main;
