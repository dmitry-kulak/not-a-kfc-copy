import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getAllBurgers } from "../../api/burgers.api";
import type { CategoryType, DeliveryOrPickup } from "../../types/burgersTypes";

export type InitialState = {
  allBurgers: CategoryType[];
  deliveryOrPickup: DeliveryOrPickup;
};

const initialState: InitialState = {
  allBurgers: [],
  deliveryOrPickup: "delivery",
};

export const loadAllBurgers = createAsyncThunk(
  "burgers/loadAllBurgers",
  async () => {
    const response = await getAllBurgers();
    return response.data;
  }
);

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
    builder.addCase(loadAllBurgers.fulfilled, (state, action) => {
      state.allBurgers = action.payload;
    });
  },
});

export const { setDeliveryOrPickup } = burgersSlice.actions;
