import React, { useState } from "react";
import { StyledModalActive, StyledModalContent } from "./Modal.styles";

interface ModalWindowProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const ModalWindow: React.FC<ModalWindowProps> = (props) => {
  return (
    <>
      {props.modalActive && (
        <StyledModalActive onClick={() => props.setModalActive(false)}>
          {props.modalActive ? (
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
