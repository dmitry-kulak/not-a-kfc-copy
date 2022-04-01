import { instance } from "./api";
import { CategoryType } from "../types/burgersTypes";
import { Cart } from "../types/cartTypes";

export const getAllBurgers = () => {
  return instance.get<CategoryType[]>("api/burgers");
};

export const postCart = (cart: Cart) => {
  return instance.post<Cart>("api/cart", cart);
};
