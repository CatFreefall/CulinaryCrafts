import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ModalState = {
  type: "login" | "register" | "payment" | "";
};

const initialState: ModalState = {
  type: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,

  reducers: {
    showLoginModal: (state: ModalState) => {
      state.type = "login";
    },
    showRegisterModal: (state: ModalState) => {
      state.type = "register";
    },
    showPaymentModal: (state: ModalState) => {
      state.type = "payment";
    },
    hideModal: (state: ModalState) => {
      state.type = "";
    },
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
