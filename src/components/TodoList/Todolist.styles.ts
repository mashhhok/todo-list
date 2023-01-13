import styled from "styled-components";
import { theme } from "../../ui/src/lib/config/theme";

export const StyleUl = styled.ul`
   {
    list-style: none;
    padding: 0;
  }
`;

export const StatusMessage = styled.div`
   {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    font-family: ${theme.fontFamily.helvetica};
    color: ${theme.colors.darkLiver};
  }
`;
