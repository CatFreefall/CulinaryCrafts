import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./features/modalSlice";
import darkModeSlice from "./features/darkModeSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    mode: darkModeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;