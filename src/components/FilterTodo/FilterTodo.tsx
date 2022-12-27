import React from "react";
import { StyledButton } from "../../style";
import { TodoI } from "../../types";
import { FilterTodoContainer } from "./FilterTodo.styles";

interface FilterTodoProps {
  setStatus: any;
  filteredTodos: TodoI[];
}

export const FilterTodo: React.FC<FilterTodoProps> = (props) => {
  const filterTodo = () => {
    return (
      <div>
        <StyledButton onClick={() => props.setStatus("all")}>All</StyledButton>
        <StyledButton onClick={() => props.setStatus("active")}>
          Active
        </StyledButton>
        <StyledButton onClick={() => props.setStatus("completed")}>
          Completed
        </StyledButton>
      </div>
    );
  };

  return (
    <FilterTodoContainer>
      <div>{props.filteredTodos.length} items left</div>
      {filterTodo()}
    </FilterTodoContainer>
  );
};
