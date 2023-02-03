import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoItem } from "../TodoItem";
import { Provider } from "react-redux";
import store from "../../../store";

describe("TodoItem", () => {
  const task = {
    id: 123,
    name: "Drink enough water",
    description: "Drink water",
    complete: false,
  };

  it("should render task item", () => {
    render(
      <Provider store={store}>
        <TodoItem todo={task} setTaskId={() => {}} />{" "}
      </Provider>
    );

    const taskSpan = screen.getByTestId("task-span");

    expect(taskSpan).toBeInTheDocument();
  });

  it("should render task name", () => {
    render(
      <Provider store={store}>
        <TodoItem todo={task} setTaskId={() => {}} />{" "}
      </Provider>
    );

    const taskName = screen.getByTestId("task-name");

    expect(taskName).toBeInTheDocument();
    expect(taskName.textContent).toBe(task.name);
  });

  it("should render whether task completed or not", () => {
    render(
      <Provider store={store}>
        <TodoItem todo={task} setTaskId={() => {}} />{" "}
      </Provider>
    );


    const taskNotCompleted = screen.getByTestId("task-not-copmleted");

    expect(taskNotCompleted).toBeInTheDocument();
  });

});
