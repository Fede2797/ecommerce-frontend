import axios from 'axios'
import { ProductUploadType } from '../types/AppTypes'

const backurl = 'http://localhost:3000/api/products'

export const postProduct = async (data: ProductUploadType) => {
  const { name, price, category, sizes, imgSource } = data

  const formData = new FormData()

  formData.append('name', name)
  formData.append('price', price)
  formData.append('category', category)
  formData.append('sizes', JSON.stringify(sizes))
  formData.append('imgSource', imgSource, imgSource.name)

  const response = await axios.post(backurl, formData)

  return response.status
}
