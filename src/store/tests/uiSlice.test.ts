import { describe, it, expect } from "vitest";
import uiSlice, { uiActions } from "../uiSlice";

describe("uiSlice", () => {
  it("should popup modal window.", () => {
    const action = { type: uiActions.toggleWindow.type };
    const result = uiSlice.reducer(
      { modalIsVisible: false, loading: false },
      action
    );
    expect(result.modalIsVisible).toBe(true);
  });

  it("should set loading state to (true).", () => {
    const action = { type: uiActions.showNotification.type, payload: true };
    const result = uiSlice.reducer(
      { modalIsVisible: false, loading: false },
      action
    );
    expect(result.loading).toBe(true);
  });

  it("should set loading state to (false).", () => {
    const action = { type: uiActions.showNotification.type, payload: false };
    const result = uiSlice.reducer(
      { modalIsVisible: false, loading: false },
      action
    );
    expect(result.loading).toBe(false);
  });
});
