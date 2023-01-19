import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  modalIsVisible: boolean;
}

const initialState: uiState = {
  modalIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleWindow(state) {
      state.modalIsVisible = !state.modalIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
