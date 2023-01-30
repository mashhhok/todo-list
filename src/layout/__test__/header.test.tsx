import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";

describe("Header", () => {
  it("should render same text that passed into title prop", () => {
    render(<Header title="ToDoList" />);
    const headingElement = screen.getByText(/ToDoList/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render Header as 'h1' element", () => {
    render(<Header title="ToDoList" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
});
