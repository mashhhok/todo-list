import styled, { keyframes } from "styled-components";
import { theme } from "../../ui/src/lib/config/theme";

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

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

export const LoadingWrapper = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Dot = styled.div<{ delay: string }>`
  background-color: ${theme.colors.darkLiver};
  border-radius: 50%;
  width: 6.5px;
  height: 6.5px;
  margin: 0 2px;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
