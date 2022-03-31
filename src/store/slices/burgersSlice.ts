import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBurgers } from "../../api/burgers.api";
import { Category } from "../../types/burgersTypes";

const loadBurgers = createAsyncThunk("burgers/loadBurgers", async () => {
  const response = await getBurgers();
  return response.data;
});

const initialState: { burgers: Category[] } = {
  burgers: [],
};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadBurgers.fulfilled, (state, action) => {
      state.burgers = action.payload;
    });
  },
});
