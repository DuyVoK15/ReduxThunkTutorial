import axios from "axios";
import { BASE_URL } from "../../env";
import axiosClient from "./axiosClient";

export const productService = {
  getAllProduct: () => {
    const url = `/products`;
    return axiosClient.get(url);
  },
  getDetailProduct: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};
