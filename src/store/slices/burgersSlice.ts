import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getBurgers } from "../../api/burgers.api";
import { CategoryType } from "../../types/burgersTypes";

export type InitialState = {
  burgers: CategoryType[];
  deliveryOrPickup: "delivery" | "pickup";
  cart: {
    total: number;
    items: {
      id: string;
      quantity: number;
    }[];
  };
};

const initialState: InitialState = {
  burgers: [],
  cart: {
    total: 0,
    items: [],
  },
  deliveryOrPickup: "delivery",
};

export const loadBurgers = createAsyncThunk("burgers/loadBurgers", async () => {
  const response = await getBurgers();
  return response.data;
});

export const burgersSlice = createSlice({
  name: "burgers",
  initialState: initialState,
  reducers: {
    setDeliveryOrPickup: (
      state,
      action: PayloadAction<"delivery" | "pickup">
    ) => {
      state.deliveryOrPickup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadBurgers.fulfilled, (state, action) => {
      state.burgers = action.payload;
    });
  },
});

export const { setDeliveryOrPickup } = burgersSlice.actions;
