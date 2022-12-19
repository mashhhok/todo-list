import React from "react";
import { TodoI } from "../../types";
import { TodoItem } from "../TodoItem/TodoItem";

type TodoItemsList = {
  todos: TodoI[];
  setTodos: any;
  filteredTodos: TodoI[];
  status: string;
};

export const TodoList: React.FC<TodoItemsList> = (props) => {
  return (
    <div>
      {props.filteredTodos.length === 0 && props.status === "all" ? ( // Check for all todo tasks
        <p>Todos is empty!</p>
      ) : props.filteredTodos.length === 0 && props.status === "active" ? ( // Check for active tasks
        <p>You have no active tasks!</p>
      ) : props.filteredTodos.length === 0 && props.status === "completed" ? ( // Check for completed tasks
        <p>You haven't completed any tasks!</p>
      ) : (
        <ul>
          {props.filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              todos={props.todos}
              setTodos={props.setTodos}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
