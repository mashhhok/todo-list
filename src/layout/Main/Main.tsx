import { useState, useEffect } from "react";
import { FilterTodo } from "../../components/FilterTodo/FilterTodo";
import { InputForm } from "../../components/InputForm/InputForm";
import { ModalWindows } from "../../components/ModalWindows/ModalWindows";

import { TodoList } from "../../components/TodoList/TodoList";

import { TodoI } from "../../types";

const Main = () => {
  const [todos, setTodos] = useState<TodoI[]>([]);

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<number>(0);

  const [status, setStatus] = useState("Active");
  const [filteredTodos, setFilteredTodos] = useState<TodoI[]>([]);

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  // useEffect(() => {
  //   setAllComplete(todos.filter((todo) => todo.complete === true).length);
  // }, [todos]);

  return (
    <div>
      <InputForm />
      <TodoList
        status={status}
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
        setTaskId={setTaskId}
        setModalActive={setModalActive}
      />
      <FilterTodo filteredTodos={filteredTodos} setStatus={setStatus} />
      <ModalWindows
        modalActive={modalActive}
        setModalActive={setModalActive}
        taskId={taskId}
      />
    </div>
  );
};
export default Main;
