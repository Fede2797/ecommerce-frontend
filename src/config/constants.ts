export const frontUrl = 'https://ecommerce-frontend-two-tau.vercel.app/'
// export const frontUrl = 'http://localhost:5173/'
export const productsRoute = 'products'
export const womenRoute = 'products/women'
export const menRoute = 'products/men'
export const kidsRoute = 'products/kids'
export const singleProductRoute = 'product/'
export const cartRoute = 'cart'
export const checkoutRoute = 'cart/checkout'
export const shippingRoute = 'cart/checkout/shipping'
export const paymentRoute = 'cart/checkout/payment'
export const checkPaymentRoute = 'cart/checkout/payment/confirm'

export enum loadingReducerConst {
  SET_LOADING = 'SET_LOADING',
  SET_NOT_LOADING = 'SET_NOT_LOADING',
}

export enum formReducerConst {
  UPDATE_FORM = 'UPDATE_FORM',
  EMPTY_FORM = 'EMPTY_FORM',
}

export enum productReducer {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CHANGE_QUANTITY = 'ADD_QUANTITY',
  SUBSTRACT_QUANTITY = 'SUBSTRACT_QUANTITY',
  EMPTY_CART = 'EMPTY_CART',
}

export enum checkoutSection {
  DETAILS = 'DETAILS',
  SHIPPING = 'SHIPPING',
  PAYMENT = 'PAYMENT',
  CONFIRM = 'CONFIRM'
}

export const checkoutButtons = [
  { id: checkoutSection.DETAILS, backButtonName: 'Back to cart', backButtonRoute: cartRoute, forwardButtonName: 'Go to shipping', forwardButtonRoute: shippingRoute },
  { id: checkoutSection.SHIPPING, backButtonName: 'Back to details', backButtonRoute: checkoutRoute, forwardButtonName: 'Go to payment', forwardButtonRoute: paymentRoute },
  { id: checkoutSection.PAYMENT, backButtonName: 'Back to shipping', backButtonRoute: shippingRoute, forwardButtonName: 'Pay now', forwardButtonRoute: checkPaymentRoute }
]

export const checkoutBreadcrumbs = [
  { name: 'Details', route: frontUrl + checkoutRoute },
  { name: 'Shipping', route: frontUrl + shippingRoute },
  { name: 'Payment', route: frontUrl + paymentRoute }
]

export const options = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'pricelowhigh', label: 'Price Low to High' },
  { value: 'pricehighlow', label: 'Price High to Low' }
]

export const categories = [
  { name: 'women', imgSource: 'url("/categories/women.webp")' },
  { name: 'men', imgSource: 'url("/categories/men.webp")' },
  { name: 'kids', imgSource: 'url("/categories/kids.webp")' }
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
]
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
]
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
  { size: 38.5, available: true }
]

export const provincias = [
  {
    name: 'Buenos Aires',
    id: 'buenos_aires'
  },
  {
    name: 'Catamarca',
    id: 'catamarca'
  },
  {
    name: 'Chaco',
    id: 'chaco'
  },
  {
    name: 'Chubut',
    id: 'chubut'
  },
  {
    name: 'Córdoba',
    id: 'cordoba'
  },
  {
    name: 'Corrientes',
    id: 'corrientes'
  },
  {
    name: 'Entre Ríos',
    id: 'entre_rios'
  },
  {
    name: 'Formosa',
    id: 'formosa'
  },
  {
    name: 'Jujuy',
    id: 'jujuy'
  },
  {
    name: 'La Pampa',
    id: 'la_pampa'
  },
  {
    name: 'La Rioja',
    id: 'la_rioja'
  },
  {
    name: 'Mendoza',
    id: 'mendoza'
  },
  {
    name: 'Misiones',
    id: 'misiones'
  },
  {
    name: 'Neuquén',
    id: 'neuquen'
  },
  {
    name: 'Río Negro',
    id: 'rio_negro'
  },
  {
    name: 'Salta',
    id: 'salta'
  },
  {
    name: 'San Juan',
    id: 'san_juan'
  },
  {
    name: 'San Luis',
    id: 'san_luis'
  },
  {
    name: 'Santa Cruz',
    id: 'santa_cruz'
  },
  {
    name: 'Santa Fe',
    id: 'santa_fe'
  },
  {
    name: 'Santiago del Estero',
    id: 'santiago_del_estero'
  },
  {
    name: 'Tierra del Fuego',
    id: 'tierra_del_fuego'
  },
  {
    name: 'Tucumán',
    id: 'tucuman'
  }
]
