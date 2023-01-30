import { describe, it, expect } from "vitest";
import todoListSlice, { uiActions } from "../uiSlice";

describe("uiSlice", () => {
  it("should popup modal window.", () => {
    const action = { type: uiActions.toggleWindow.type };
    const result = todoListSlice.reducer({ modalIsVisible: false }, action);
    expect(result.modalIsVisible).toBe(true);
  });
});
