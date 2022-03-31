import { instance } from "./api";
import { Category } from "../types/burgersTypes";

export const getBurgers = () => {
  return instance.get<Category[]>("api/burgers");
};
