import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);

  return response.data;
};

// now copied line starting from export and pasted below  and given getallProductId

export const getAllProductId = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);

  return response.data;
};


// this is for getting Image

export const getAllProductImage = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}/image`);

  return response.data;
};
