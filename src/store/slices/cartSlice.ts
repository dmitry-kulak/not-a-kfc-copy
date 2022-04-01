import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Cart } from "../../types/cartTypes";
import { postCart } from "../../api/burgers.api";
import { ProductType } from "../../types/burgersTypes";

type InitialState = Cart;

const initialState: InitialState = {
  total: 0,
  items: [],
};

export const submitCart = createAsyncThunk(
  "cart/submitCart",
  async (cart: Cart) => {
    const response = await postCart(cart);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.total += action.payload.price;
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      state.total -= action.payload.price;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(submitCart.fulfilled, (state, action) => {
      console.log(action.payload);
      state = initialState;
    });
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
