import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ModalState = {
  type: "login" | "register" | "payment" | "";
  active: boolean;
};

const initialState: ModalState = {
  type: "",
  active: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,

  reducers: {
    showLoginModal: (state: ModalState) => {
      state.type = "login";
      state.active = true;
      console.log("DONE");
    },
    showRegisterModal: (state: ModalState) => {
      state.type = "register";
      state.active = true;
    },
    showPaymentModal: (state: ModalState) => {
      state.type = "payment";
      state.active = true;
    },
    hideModal: (state: ModalState) => initialState,
  },
});

export const selectModal = (state: RootState) => state.modal;

export const {
  showLoginModal,
  showRegisterModal,
  showPaymentModal,
  hideModal,
} = modalSlice.actions;

export default modalSlice.reducer;
