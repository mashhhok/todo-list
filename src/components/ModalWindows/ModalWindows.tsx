import { DeleteConfirmation } from "../ModalWindow/DeleteConfiramtion/DeleteConfirmation";
import { useState } from "react";

interface ModalWindowsProps {
  taskId: number;
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  removeTodo: (id: number) => void;
}

export const ModalWindows: React.FC<ModalWindowsProps> = (props) => {
  return (
    <>
      <DeleteConfirmation
        modalActive={props.modalActive}
        setModalActive={props.setModalActive}
        taskId={props.taskId}
        removeTodo={props.removeTodo}
      />
    </>
  );
};
