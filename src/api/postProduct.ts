import axios from 'axios';
import { SyzeType } from '../types/AppTypes';

const backurl = 'http://localhost:3000/api/products';

interface dataProps {
  name: string,
  price: string,
  category: string,
  sizes: SyzeType[],
  imgSource: File,
}

export const postProduct = async ( data: dataProps ) => {
  const {name, price, category, sizes, imgSource } = data;

  const formData = new FormData();

  formData.append('name', name);
  formData.append('price', price);
  formData.append('category', category);
  formData.append('sizes', JSON.stringify(sizes));
  formData.append("imgSource", imgSource, imgSource.name);

  const response = await axios.post(backurl, formData);
  
  return response.status;
}