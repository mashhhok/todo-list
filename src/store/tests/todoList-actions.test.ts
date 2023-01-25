import {
  sendTodoListData,
  fetchTodoListData as fetchTodos,
} from "../todoList-actions";
import { describe, it, expect, vi } from "vitest";

const testResponseData = [
  {
    id: 1,
    name: "testName",
    complete: false,
    description: "",
  },
];

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

describe("todoThunk", () => {
  it("should return available response data.", async () => {
    const dispatch = vi.fn();
    const thunk = fetchTodos(dispatch);
    await thunk(dispatch, () => ({}), "");

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(5);
    const [start, loadingTrue, loadingFalse, todoList, end] = calls;

    expect(start[0].type).toBe("todoList/fetchTodoList/pending");
    expect(loadingTrue[0].payload).toEqual(true);
    expect(loadingFalse[0].payload).toEqual(false);
    expect(todoList[0].payload).toEqual(testResponseData);
    expect(end[0].type).toBe("todoList/fetchTodoList/fulfilled");
  });

  it("should send 'sendRequest' and return available response data.", async () => {
    const dispatch = vi.fn();
    const thunk = sendTodoListData(testResponseData);
    await thunk(dispatch, () => ({}), "");

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);
    const [start, end] = calls;

    expect(start[0].type).toBe("todoList/sendTodoListData/pending");
    expect(end[0].type).toBe("todoList/sendTodoListData/fulfilled");
    expect(end[0].payload).toBe(testResponseData);
  });
});
