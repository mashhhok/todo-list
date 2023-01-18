import { useState, useEffect } from "react";
import { FilterTodo } from "../../components/FilterTodo/FilterTodo";
import { InputForm } from "../../components/InputForm/InputForm";
import { ModalWindows } from "../../components/ModalWindows/ModalWindows";

import { TodoList } from "../../components/TodoList/TodoList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { sendTodoListData } from "../../store/todoList-actions";

import { TodoI } from "../../types";

const Main = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<number>(0);

  const [status, setStatus] = useState("Active");
  const [filteredTodos, setFilteredTodos] = useState<TodoI[]>([]);

  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => state.todos.todoList);

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todoList.filter((todo) => todo.complete === true));
        break;
      case "Active":
        setFilteredTodos(todoList.filter((todo) => todo.complete === false));
        break;
      default:
        setFilteredTodos(todoList);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todoList, status]);

  // not working!
  // useEffect(() => {
  //   dispatch(sendTodoListData(todoList));
  // }, [dispatch, todoList]);

  return (
    <div>
      <InputForm />
      <TodoList
        status={status}
        setTaskId={setTaskId}
        filteredTodos={filteredTodos}
        setModalActive={setModalActive}
      />
      <FilterTodo filteredTodos={filteredTodos} setStatus={setStatus} />
      <ModalWindows
        taskId={taskId}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
    </div>
  );
};
export default Main;
