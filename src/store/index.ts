import { configureStore } from "@reduxjs/toolkit";

import { burgersSlice } from "./slices/burgersSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer: { burgers: burgersSlice.reducer, cart: cartSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
