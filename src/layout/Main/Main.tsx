import { useState, useEffect } from "react";
import { FilterTodo } from "../../components/FilterTodo/FilterTodo";
import { InputForm } from "../../components/InputForm/InputForm";
import { ModalWindows } from "../../components/ModalWindows/ModalWindows";

import { TodoList } from "../../components/TodoList/TodoList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchTodoListData,
  sendTodoListData,
} from "../../store/todoList-actions";

import { TodoI } from "../../types";

let isInitial = true;

const Main = () => {
  const [taskId, setTaskId] = useState<number>(0);

  const [status, setStatus] = useState("Active");
  const [filteredTodos, setFilteredTodos] = useState<TodoI[]>([]);

  const { todoList, changed } = useAppSelector((state) => state.todos);

  const dispatch = useAppDispatch();
  const modalIsVisible = useAppSelector((state) => state.ui.modalIsVisible);

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

  // Filter todo list
  useEffect(() => {
    filterHandler();
  }, [todoList, status]);

  // Get data from data base
  useEffect(() => {
    dispatch(fetchTodoListData(dispatch));
  }, [dispatch]);

  // Send data to data base
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (changed) {
      dispatch(sendTodoListData(todoList));
    }
  }, [dispatch, todoList]);

  return (
    <div>
      <InputForm />
      <TodoList
        status={status}
        setTaskId={setTaskId}
        filteredTodos={filteredTodos}
      />
      <FilterTodo setStatus={setStatus} />
      {modalIsVisible && <ModalWindows taskId={taskId} />}
    </div>
  );
};
export default Main;
