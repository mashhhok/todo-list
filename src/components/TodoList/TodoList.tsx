import React from "react";
import { TodoI } from "../../types";
import { TodoItem } from "../TodoItem/TodoItem";
type TodoItemsList = {
  todos: TodoI[];
  setTodos: (todos: TodoI[]) => void;
};
export const TodoList: React.FC<TodoItemsList> = (props) => {

  const {todos, setTodos} = props

  const removeTodo = (id: number) => {
    const removedToDo = todos.filter((todo) => todo.id !== id)
    setTodos(removedToDo);
    //setAllTodos(allTodos - 1);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodo={(item)=>{
            setTodos([...todos, item])}}
          removeItem={(id)=>removeTodo(id)}
        />
      ))}
    </ul>
  );
};