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
  
  // Attach searchParams to the URL
  url.search = searchParams.toString();
  
  const response = await axios.get(url.href);
  return response;
}

export const getCategoryProducts = async({ page = 1, limit = 40, sortBy = "popularity", category }: {page: number, limit: number, sortBy: string, category: string}) => {
  const paramsObj = {page: page.toString(), limit: limit.toString(), sortBy};
  const searchParams = new URLSearchParams(paramsObj);
  const url = new URL("/api/products/" + category, baseUrl);

  // Attach searchParams to the URL
  url.search = searchParams.toString();

  const response = await axios.get(url.href);
  return response;
}