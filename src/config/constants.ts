export const frontUrl = "http://localhost:5173/";
export const productsRoute = "products";
export const womenRoute = "products/women";
export const menRoute = "products/men";
export const kidsRoute = "products/kids";
export const singleProductRoute = "product/";

export enum productReducer {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  ADD_QUANTITY = "ADD_QUANTITY",
  SUBSTRACT_QUANTITY = "SUBSTRACT_QUANTITY",
}

export const options =[
  { value: 'popularity', label: 'Popularity' },
  { value: 'pricelowhigh', label: 'Price Low to High' },
  { value: 'pricehighlow', label: 'Price High to Low' },
]

export const categories = [
  { name: "women", imgSource: 'url("/categories/women.jpg")'}, 
  { name: "men", imgSource: 'url("/categories/men.jpg")'},
  { name: "kids", imgSource: 'url("/categories/kids.jpg")'},
]

export const menSizes = [
  { size: 40, available: true },
  { size: 40.5, available: true },
  { size: 41, available: true },
  { size: 41.5, available: true },
  { size: 42, available: true },
  { size: 42.5, available: true },
  { size: 43, available: true },
  { size: 43.5, available: true },
  { size: 44, available: true },
  { size: 44.5, available: true }
];
export const womenSizes = [
  { size: 35, available: true },
  { size: 35.5, available: true },
  { size: 36, available: true },
  { size: 36.5, available: true },
  { size: 37, available: true },
  { size: 37.5, available: true },
  { size: 38, available: true },
  { size: 38.5, available: true },
  { size: 39, available: true },
  { size: 39.5, available: true }
];
export const kidsSizes = [
  { size: 34, available: true },
  { size: 34.5, available: true },
  { size: 35, available: true },
  { size: 35.5, available: true },
  { size: 36, available: true },
  { size: 36.5, available: true },
  { size: 37, available: true },
  { size: 37.5, available: true },
  { size: 38, available: true },
  { size: 38.5, available: true },
];
