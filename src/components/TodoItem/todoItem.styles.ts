import styled from "styled-components";
import { theme } from "../../ui/src/lib/config/theme";

export const TodoItemContainer = styled.div`
   {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    color: ${theme.colors.argent};
    font-family: ${theme.fontFamily.helveticaNeue};
    font-size: 20px;
    padding: 10px;
    border-bottom: 1px solid #dee2e6;
  }
`;
