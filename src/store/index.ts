import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./todoListSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, todos: todoListSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
