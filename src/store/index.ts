import { configureStore } from "@reduxjs/toolkit";

import { burgersSlice } from "./slices/burgersSlice";

export const store = configureStore({
  reducer: burgersSlice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
