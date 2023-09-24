import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ModeState = {
  mode: "dark" | "light";
};

const initialState: ModeState = {
  mode: "light",
};

export const modalSlice = createSlice({
  name: "mode",
  initialState: initialState,

  reducers: {
    toggleMode: (state: ModeState) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const selectModal = (state: RootState) => state.modal;

export const { toggleMode } = modalSlice.actions;

export default modalSlice.reducer;
