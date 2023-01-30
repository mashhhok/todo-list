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
    transform: scale(0.8);
    border-radius: 2px;
    padding: 3rem;
    background-color: #e9ecef;
    border-radius: 3px;
    transition: all 0.3s;
    width: 25vw;
    color: rgb(35, 33, 40);
    @media (max-width: 1400px) {
      width: 30vw;
    }
    @media (max-width: 1200px) {
      width: 35vw;
    }
    @media (max-width: 950px) {
      width: 45vw;
    }
    @media (max-width: 550px) {
      width: 75vw;
    }
  }
`;
