import React from "react";
import { StyledButton } from "../../style";
import { TodoI } from "../../types";
import { FilterTodoContainer } from "./FilterTodo.styles";
import { ItemsCounter } from "./FilterTodo.styles";
interface FilterTodoProps {
  setStatus: any;
  filteredTodos: TodoI[];
}

export const FilterTodo: React.FC<FilterTodoProps> = (props) => {
  const counterCompleted = props.filteredTodos.filter(
    (todos) => todos.complete === true
  );

  const filterTodo = () => {
    return (
      <div>
        <StyledButton onClick={() => props.setStatus("All")}>All</StyledButton>
        <StyledButton onClick={() => props.setStatus("Active")}>
          Active
        </StyledButton>
        <StyledButton onClick={() => props.setStatus("Completed")}>
          Completed
        </StyledButton>
      </div>
    );
  };

  return (
    <FilterTodoContainer>
      <ItemsCounter>
        {props.filteredTodos.length - counterCompleted.length} items left
      </ItemsCounter>
      {filterTodo()}
    </FilterTodoContainer>
  );
};
