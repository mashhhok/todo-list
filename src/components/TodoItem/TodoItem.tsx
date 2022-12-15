import React, { useState } from "react";
import { TodoI } from "../../types";

interface TodoItemProps {
  todo: TodoI;
  todos: TodoI[];
  setTodos: any;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isEditingID, setIsEditingID] = useState<number>(0);
  const [editingText, setEditingText] = useState<string>("");
  const toggleTodo = (id: number) => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  const removeTodo = (id: number) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
    //setAllTodos(allTodos - 1);
  };

  const editTodo = (id: number, todoItemText: string) => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          text: todoItemText,
        };
      })
    );
  };

  const chandeHandler = (event: React.ChangeEvent) => {
    setEditingText(event.target.value);
  };

  const submitHandler = () => {
    editTodo(props.todo.id, editingText);
    setIsEditingID(0);
  };

  return (
    <li>
      {isEditingID === props.todo.id ? (
        <input
          type="text"
          value={editingText}
          onChange={() => chandeHandler}
          onSubmit={() => submitHandler}
        />
      ) : (
        <span>{props.todo.name}</span>
      )}
      <input type="checkbox" onClick={() => toggleTodo(props.todo.id)}></input>
      <button onClick={() => removeTodo(props.todo.id)}>x</button>
      <button onClick={() => setIsEditingID(props.todo.id)}>u</button>
    </li>
  );
};
