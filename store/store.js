import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [modalSlice.name]: modalSlice.reducer,
    },
    devTools: true,
});

export const wrapper = createWrapper(makeStore);