import React from "react";
import { useAppSelector } from "../../store/hooks";
import { StyledButton } from "../../style";
import { FilterTodoContainer } from "./FilterTodo.styles";
import { ItemsCounter } from "./FilterTodo.styles";
interface FilterTodoProps {
  setStatus: any;
}

export const FilterTodo: React.FC<FilterTodoProps> = (props) => {
  const todoList = useAppSelector((state) => state.todos.todoList);
  const counterCompleted = todoList.filter((todos) => todos.complete === false);

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
      <ItemsCounter data-testid="test-span">
        {counterCompleted.length} items left
      </ItemsCounter>
      {filterTodo()}
    </FilterTodoContainer>
  );
};
