import styled from "styled-components";
import { theme } from "../../ui/src/lib/config/theme";

export const TodoItemContainer = styled.div`
   {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.argent};
    font-family: ${theme.fontFamily.helveticaNeue};
    font-size: 20px;
    padding: 10px;
    border-bottom: 1px solid #dee2e6;
  }
`;

export const ControlElemsContainer = styled.div`
   {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.argent};
    & > * :hover {
      cursor: pointer;
      color: ${theme.colors.darkLiver};
    }
  }
`;

export const StyledInput = styled.input`
   {
    width: 80%;
    font-size: 20px;
    border: none;
    box-shadow: inset 0 0 6px ${theme.colors.argent};
    border-radius: 1px;
    outline: solid ${theme.colors.argent};
  }
`;
