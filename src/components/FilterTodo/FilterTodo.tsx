import React from "react";
import { TodoI } from "../../types";

interface FilterTodoProps {
  setStatus: any;
  filteredTodos: TodoI[];
}

export const FilterTodo: React.FC<FilterTodoProps> = (props) => {
  return (
    <div>
      <div>{props.filteredTodos.length}</div>
      <div>
        <button onClick={() => props.setStatus("all")}>All</button>
        <button onClick={() => props.setStatus("active")}>Active</button>
        <button onClick={() => props.setStatus("completed")}>Completed</button>
      </div>
    </div>
  );
};
