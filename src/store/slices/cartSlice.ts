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

      const item = state.items.find(
        (item) => item.item.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          item: action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      state.total -= action.payload.price;

      const item = state.items.find(
        (item) => item.item.id === action.payload.id
      );

      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.item.id !== action.payload.id
          );
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(submitCart.fulfilled, (state, action) => {
      console.log(action.payload);
      return initialState;
    });
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
