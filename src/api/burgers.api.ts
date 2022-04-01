import { instance } from "./api";
import { CategoryType } from "../types/burgersTypes";

export const getBurgers = () => {
  return instance.get<CategoryType[]>("api/burgers");
};
