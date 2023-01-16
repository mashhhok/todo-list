import { ModalWindow } from "../ModalWindow";
import {
  BtnContainer,
  CancelBtn,
  ConfirmationMessage,
  ConfirmBtn,
  Title,
} from "./DeleteConfiramtion.styles";

interface DeleteConfiramtionProps {
  taskId: number;
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  removeTodo: (id: number) => void;
}

export const DeleteConfirmation: React.FC<DeleteConfiramtionProps> = (
  props
) => {
  return (
    <ModalWindow
      modalActive={props.modalActive}
      setModalActive={props.setModalActive}
    >
      <Title>Delete confirmation</Title>
      <ConfirmationMessage>
        Are you sure you want to delete this item?
      </ConfirmationMessage>
      <BtnContainer>
        <CancelBtn onClick={() => props.setModalActive(false)}>
          Cancel
        </CancelBtn>
        <ConfirmBtn
          onClick={() => {
            props.removeTodo(props.taskId);
            props.setModalActive(false);
          }}
        >
          Confirm
        </ConfirmBtn>
      </BtnContainer>
    </ModalWindow>
  );
};
