import React, { useState } from "react";
import { TodoI } from "../../types";

interface TodoItemProps {
    todo: TodoI;
    setTodo: (todo: TodoI) => void;
  removeItem: (id: number)=> void
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isEditingID, setIsEditingID] = useState<number>(0);
  const [editingText, setEditingText] = useState<string>(props.todo.name);

  const toggleTodo = (id: number) => {
    //   const togglingToDo =
    //       props.todos.map((todo) => {
    //       if (todo.id !== id) return todo;
    //       return {
    //           ...todo,
    //           complete: !todo.complete,
    //       };
    //   })
    // props.setTodos(togglingToDo);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingText(event.target.value);
  }

  const submitHandler = () => {
      props.setTodo({id: props.todo.id, name: editingText, complete: props.todo.complete})
  };

  return (
    <li>
      {isEditingID === props.todo.id ? (
          <form
              onSubmit={() => {submitHandler();
              }}
          >
        <input
          type="text"
          value={editingText}
          onChange={(event) => changeHandler(event)}
          onSubmit={() => submitHandler}
        />
          </form>
      ) : (
        <span>{props.todo.name}</span>
      )}
      <input type="checkbox" onClick={() => toggleTodo(props.todo.id)}></input>
      <button onClick={() => props.removeItem(props.todo.id)}>x</button>
      <button onClick={() => setIsEditingID(props.todo.id)}>u</button>
    </li>
  );
};
