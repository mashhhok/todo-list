import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  isVisibleModal: boolean;
}

const initialState: uiState = {
  isVisibleModal: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showModal(state, action) {
      state.isVisibleModal = !action.payload.status;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
