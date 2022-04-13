import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Cart } from "../../types/cartTypes";
import type { DeliveryOrPickup, ProductType } from "../../types/burgersTypes";
import { postCart } from "../../api/burgers.api";

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
    filterCart: (state, action: PayloadAction<DeliveryOrPickup>) => {
      switch (action.payload) {
        case "delivery":
          state.items = state.items.filter((item) => item.item.delivery);
          state.total = state.items.reduce(
            (prevItem, currItem) =>
              prevItem + currItem.quantity * currItem.item.price,
            0
          );
          break;

        case "pickup":
        default:
          return state;
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

export const { addToCart, removeFromCart, filterCart } = cartSlice.actions;
