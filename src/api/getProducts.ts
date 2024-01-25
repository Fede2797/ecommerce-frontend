import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const getPopularProducts = async () => {
  // Gets the 4 best selling products
  const url = new URL("/api/products/popular", baseUrl);

  const response = await axios.get(url.href);
  return response;
}

export const getEveryProduct = async({ page = 1, limit = 40, sortBy = "popularity" }) => {
  const paramsObj = {page: page.toString(), limit: limit.toString(), sortBy};
  const searchParams = new URLSearchParams(paramsObj);
  const url = new URL("/api/products", baseUrl);
  // TODO: Arreglar el URL
  

  const response = await axios.get(url.href);
  return response;
}

export const getCategoryProducts = async(category: string) => {
  const url = new URL("/api/products/" + category, baseUrl);

  const response = await axios.get(url.href);
  return response;
}