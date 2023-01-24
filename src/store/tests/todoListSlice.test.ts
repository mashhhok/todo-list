import { it, describe, expect } from "vitest";
import { TodoI } from "../../types";
import todoListSlice, { todoListActions } from "../todoListSlice";

describe("todoListSlice", () => {
  it('should replace todo list with "replaceTodoList" action,', () => {
    const todos = [
      { id: 1, name: "test1", complete: false, description: "" },
      { id: 2, name: "test2", complete: false, description: "" },
    ];
    const action = {
      type: todoListActions.replaceTodoList.type,
      payload: { todoList: todos },
    };
    const result = todoListSlice.reducer(
      { todoList: [], changed: false },
      action
    );
    expect(result.todoList).toEqual(todos);
  });

  it('should add todo item with "addTodo" action.', () => {
    const action = {
      type: todoListActions.addTodo.type,
      payload: { name: "Redux" },
    };

    const result = todoListSlice.reducer(
      { todoList: [], changed: false },
      action
    );
    expect(result.todoList[0].name).toBe("Redux");
    expect(result.todoList[0].complete).toBe(false);
  });

  it('should popup alert message "please, type the text" if text for todo item not provided', () => {
    const action = {
      type: todoListActions.addTodo.type,
      payload: { name: "" },
    };

    const result = todoListSlice.reducer(
      { todoList: [], changed: false },
      action
    );
    expect(result.todoList[0]).toBeUndefined();
  });

  it('should remove todo item from state with "removeTodo" action.', () => {
    const todos: TodoI[] = [
      { id: 111, name: "Redux", complete: false, description: "" },
    ];
    const action = {
      type: todoListActions.removeTodo,
      payload: 111,
    };
    const result = todoListSlice.reducer(
      { todoList: todos, changed: false },
      action
    );
    expect(result.todoList[0]).toEqual(undefined);
  });

  it('should toggle todo item with "toggleTodo" action', () => {
    const todos = [
      { id: 111, name: "Redux", complete: false, description: "" },
    ];
    const action = {
      type: todoListActions.toggleTodo.type,
      payload: 111,
    };
    const result = todoListSlice.reducer(
      { todoList: todos, changed: false },
      action
    );
    expect(result.todoList[0].complete).toBe(true);
  });

  it('should update todos with "updateTodo" action', () => {
    const existingTodos = [
      { id: 1234, name: "test1", complete: false, description: "" },
    ];
    const todosToUpdate = {
      id: 1234,
      newText: "newTest2",
    };
    const action = {
      type: todoListActions.updateTodo,
      payload: todosToUpdate,
    };
    const result = todoListSlice.reducer(
      { todoList: existingTodos, changed: false },
      action
    );
    expect(result.todoList[0].name).toBe(todosToUpdate.newText);
  });
});
