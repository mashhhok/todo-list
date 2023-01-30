import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FilterTodo } from "../FilterTodo";
import { Provider } from "react-redux";
import store from "../../../store";

describe("FilterTodo", () => {
  it("should render 0 number of incomplete tasks", () => {
    render(
      <Provider store={store}>
        <FilterTodo setStatus="Active" />
      </Provider>
    );
    const counterElement = screen.getByText("0 items left");
    expect(counterElement).toBeInTheDocument();
  });

  it("should render span element for counter element", () => {
    render(
      <Provider store={store}>
        <FilterTodo setStatus="Active" />
      </Provider>
    );
    const counterElement = screen.getByTestId("test-span");
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toContainHTML("span");
  });
});
