import styled from "styled-components";

export const StyledModalActive = styled.div`
   {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(0.5rem);
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    transition: 0.3s;
    display: flex;
    pointer-events: all;
  }
`;

export const StyledModalContent = styled.div`
   {
    border-radius: 2px;
    padding: 3rem;
    background-color: #e9ecef;
    transition: all 0.3s;
    width: 25vw;
    color: rgb(35, 33, 40);
  }
`;
