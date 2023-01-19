import { DeleteConfirmation } from "../ModalWindow/DeleteConfiramtion/DeleteConfirmation";
interface ModalWindowsProps {
  taskId: number;
}

export const ModalWindows: React.FC<ModalWindowsProps> = (props) => {
  return (
    <>
      <DeleteConfirmation taskId={props.taskId} />
    </>
  );
};
