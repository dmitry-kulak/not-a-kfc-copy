import axios from "axios";

const port = process.env.PORT || 5000;

export const instance = axios.create({
  baseURL: `http://localhost:${port}/`,
});
