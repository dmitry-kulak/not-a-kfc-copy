import { ProductType } from "./burgersTypes";

export type Cart = {
  total: number;
  items: { quantity: number; item: ProductType }[];
};
