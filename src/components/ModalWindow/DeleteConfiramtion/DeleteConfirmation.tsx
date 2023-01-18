import { useAppDispatch } from "../../../store/hooks";
import { todoListActions } from "../../../store/todoListSlice";
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
}

export const DeleteConfirmation: React.FC<DeleteConfiramtionProps> = (
  props
) => {
  const dispatch = useAppDispatch();

  const removeHandler = (id: number) => {
    dispatch(todoListActions.removeTodo(id));
  };

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
            // props.removeTodo(props.taskId);
            removeHandler(props.taskId);
            props.setModalActive(false);
          }}
        >
          Confirm
        </ConfirmBtn>
      </BtnContainer>
    </ModalWindow>
  );
};
