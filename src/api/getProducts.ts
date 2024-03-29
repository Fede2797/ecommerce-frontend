import axios from 'axios'

// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://ecommerce-backend-dev-jfnk.2.us-1.fl0.io'

export const getPopularProducts = async () => {
  // Gets the 4 best selling products
  console.log({ baseUrl })

  const url = new URL('/api/products/popular', baseUrl)

  console.log({ url })

  const response = await axios.get(url.href)
  return response
}

export const getEveryProduct = async ({ page = 1, limit = 40, sortBy = 'popularity' }) => {
  const paramsObj = { page: page.toString(), limit: limit.toString(), sortBy }
  const searchParams = new URLSearchParams(paramsObj)
  const url = new URL('/api/products', baseUrl)

  // Attach searchParams to the URL
  url.search = searchParams.toString()

  const response = await axios.get(url.href)
  return response
}

export const getCategoryProducts = async ({ page = 1, limit = 40, sortBy = 'popularity', category }: {page: number, limit: number, sortBy: string, category: string}) => {
  const paramsObj = { page: page.toString(), limit: limit.toString(), sortBy }
  const searchParams = new URLSearchParams(paramsObj)
  const url = new URL('/api/products/' + category, baseUrl)

  // Attach searchParams to the URL
  url.search = searchParams.toString()

  const response = await axios.get(url.href)
  return response
}

export const getProductById = async (id: string) => {
  const url = new URL('/api/products/single/' + id, baseUrl)

  const response = await axios.get(url.href)
  return response
}
