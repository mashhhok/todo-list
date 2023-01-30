import styled from "styled-components";
import { theme } from "../../../ui/src/lib/config/theme";

export const Title = styled.p`
   {
    font-family: ${theme.fontFamily.helvetica};
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.2rem solid rgba(35, 33, 40, 0.15);
    @media (max-width: 1200px) {
      padding: 0 2rem 2rem 2rem;
    }
  }
`;

export const ConfirmationMessage = styled.p`
   {
    font-family: ${theme.fontFamily.helvetica};
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
    }
  }
`;

export const ConfirmBtn = styled.button`
   {
    font-size: 1.4rem;
    margin-left: 3.2rem;
    background-color: ${theme.colors.btnConfirm};
    border-radius: 100px;
    padding: 12px 16px;
    border: none;
    color: #501111;
    transition: 0.1s;
    &:hover {
      cursor: pointer;
      outline: 1.6px solid rgb(35, 33, 40);
    }
    &:active {
      cursor: pointer;
      background-color: #e66060;
    }
    @media (max-width: 1200px) {
      padding: 0.8rem;
    }
    @media (max-width: 800px) {
      padding: 0.6rem;
    }
  }
`;

export const CancelBtn = styled.button`
   {
    font-size: 1.4rem;
    border: none;
    background-color: #e9ecef;
    padding: 12px 16px;
    border-radius: 100px;
    transition: 0.1s;
    &:hover {
      cursor: pointer;
      background-color: #868e96;
      color: #e9ecef;
      outline: 1.6px solid rgb(35, 33, 40);
    }
    &:active {
      cursor: pointer;
      background-color: #495057;
      color: #e9ecef;
      outline: 1.6px solid rgb(35, 33, 40);
    }
    @media (max-width: 1200px) {
      padding: 0.8rem;
    }
    @media (max-width: 800px) {
      padding: 0.6rem;
    }
  }
`;
