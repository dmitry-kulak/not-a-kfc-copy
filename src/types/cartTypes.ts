import { ProductType } from "./burgersTypes";

export type Cart = {
  total: number;
  items: ProductType[];
};
