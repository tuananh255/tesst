import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";
import axios from "axios";

const addProduct = async (product) => {
  const res = await axios.post(
    `${base_url}product/add-product`,
    product,
    config
  );
  if (res.data) {
    return res.data;
  }
};
const getAllProduct = async () => {
  const res = await axios.get(
    `${base_url}product/all-product`,
    config
  );
  if (res.data) {
    return res.data;
  }
};
const getProduct = async (id) => {
  const res = await axios.get(
    `${base_url}product/get-product/${id}`,
    config
  );
  if (res.data) {
    return res.data;
  }
};
const filterProduct = async (
  filters
) => {
  const response = await axios.post(
    `${base_url}product/filter-product`,
    filters,
    config
  );
  return response.data;
};
export const productService = {
  addProduct,
  getAllProduct,
  getProduct,
  filterProduct,
};
