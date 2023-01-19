import { useAppDispatch } from "../../../store/hooks";
import { todoListActions } from "../../../store/todoListSlice";
import { uiActions } from "../../../store/uiSlice";
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
}

export const DeleteConfirmation: React.FC<DeleteConfiramtionProps> = (
  props
) => {
  const dispatch = useAppDispatch();

  const removeHandler = (id: number) => {
    dispatch(todoListActions.removeTodo(id));
  };

  const toggleModalWindowHandler = () => {
    dispatch(uiActions.toggleWindow());
  };

  return (
    <ModalWindow>
      <Title>Delete confirmation</Title>
      <ConfirmationMessage>
        Are you sure you want to delete this item?
      </ConfirmationMessage>
      <BtnContainer>
        <CancelBtn onClick={() => toggleModalWindowHandler()}>Cancel</CancelBtn>
        <ConfirmBtn
          onClick={() => {
            removeHandler(props.taskId);
            toggleModalWindowHandler();
          }}
        >
          Confirm
        </ConfirmBtn>
      </BtnContainer>
    </ModalWindow>
  );
};
