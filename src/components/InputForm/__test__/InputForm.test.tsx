import { describe, it, expect } from "vitest";
import { InputForm } from "../InputForm";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";

describe("InputForm", () => {
  it("should render input element", () => {
    render(
      <Provider store={store}>
        <InputForm />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/Add new task.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", async () => {
    render(
      <Provider store={store}>
        <InputForm />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(/Add new task.../i);
    fireEvent.change(inputElement, { target: { value: "test1" } });

    // expect(inputElement).toBe("test1");
  });
});
