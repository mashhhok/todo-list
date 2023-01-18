import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  isVisibleModal: boolean;
  status: string;
}

const initialState: uiState = {
  isVisibleModal: false,
  status: "",
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
