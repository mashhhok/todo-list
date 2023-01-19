import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uiActions } from "../../store/uiSlice";
import { StyledModalActive, StyledModalContent } from "./Modal.styles";

interface ModalWindowProps {
  children?: React.ReactNode;
}

export const ModalWindow: React.FC<ModalWindowProps> = (props) => {
  const modalIsVisible = useAppSelector((state) => state.ui.modalIsVisible);

  const dispatch = useAppDispatch();
  const toggleModalWindowHandler = () => {
    dispatch(uiActions.toggleWindow());
  };

  return (
    <>
      {modalIsVisible && (
        <StyledModalActive onClick={() => toggleModalWindowHandler()}>
          {modalIsVisible ? (
            <StyledModalContent onClick={(e) => e.stopPropagation()}>
              {props.children}
            </StyledModalContent>
          ) : (
            <StyledModalActive />
          )}
        </StyledModalActive>
      )}
    </>
  );
};
