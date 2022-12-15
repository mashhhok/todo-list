import React from "react";
import { TodoI } from "../../types";

export const TodoItem: React.FC<{ todo: TodoI }> = (props) => {
  return <li>{props.todo.name}</li>;
};
