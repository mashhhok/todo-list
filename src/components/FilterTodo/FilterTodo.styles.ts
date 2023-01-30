import styled from "styled-components";
import { theme } from "../../ui/src/lib/config/theme";

export const FilterTodoContainer = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    color: ${theme.colors.argent};
  }
`;

export const ItemsCounter = styled.span`
   {
    font-family: ${theme.fontFamily.helvetica};
  }
`;
