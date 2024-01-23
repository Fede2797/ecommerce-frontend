import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const getPopularProducts = async () => {
  const url = new URL("/api/products/popular", baseUrl);

  const response = await axios.get(url.href);
  return response;
}