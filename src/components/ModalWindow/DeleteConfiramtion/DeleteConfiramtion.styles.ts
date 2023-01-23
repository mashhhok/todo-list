import styled from "styled-components";

export const Title = styled.p`
   {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.2rem solid rgba(35, 33, 40, 0.15);
    @media (max-width: 1200px) {
      padding: 0 2rem 2rem 2rem;
    };
  }
`;

export const ConfirmationMessage = styled.p`
   {
    text-align: center;
    background-color: #e9aaaa;
    color: #501111;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.6rem;
  }
`;

export const BtnContainer = styled.div`
   {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    border-top: 0.2rem solid rgba(35, 33, 40, 0.15);
    @media (max-width: 800px) {
      justify-content: center;
    };
  }
`;

export const ConfirmBtn = styled.button`
   {
    margin-left: 3.2rem;
    background-color: #ff6b6b;
    color: #501111;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      outline: 0.2rem solid rgb(35, 33, 40);
    };
    @media (max-width: 1200px) {
      padding: 0.8rem;
    };
    @media (max-width: 800px) {
      padding: 0.6rem;
    };
  }
`;

export const CancelBtn= styled.button`
   {
    font-size: 1.6rem;
    border: none;
    background-color: #e9ecef;
    padding: 1rem;
    border-radius: 10rem;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      background-color: grey;
      color: #e9ecef;
      outline: 0.2rem solid rgb(35, 33, 40);
    };
    @media (max-width: 1200px) {
      padding: 0.8rem;
    };
    @media (max-width: 800px) {
      padding: 0.6rem;
    };
  }
`;
