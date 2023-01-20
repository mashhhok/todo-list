import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  modalIsVisible: boolean;
  loading: boolean;
}

const initialState: uiState = {
  modalIsVisible: false,
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleWindow(state) {
      state.modalIsVisible = !state.modalIsVisible;
    },
    showNotification(state, action) {
      state.loading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
