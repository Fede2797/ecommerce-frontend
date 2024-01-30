import { createContext, useContext, useReducer } from 'react';
import { productReducer } from './config/constants';
import { CartProduct } from './types/AppTypes';

// Checks if the product is already in the cart
const isProdInCart = (product: CartProduct, cart: CartProduct[]) => {
  let inCart = false;
  // Check if the product is already in the cart
  for (const prod  of cart) {
    if (prod._id === product._id) {
      inCart = true;
    }
  };
  return inCart;
}

// Checks if the new product and the same product that is in the cart have the same size
const isSameSize = (product: CartProduct, cart: CartProduct[]) => {
  let sameSize = false;
  // Check if the product is already in the cart
  for (const prod  of cart) {
    if (prod._id === product._id && prod.size === product.size) {
      sameSize = true;
    }
  };
  return sameSize;
}

const addItemToCart = (newProduct: CartProduct, cartProducts: CartProduct[]) => {
  
  const prodInCart = isProdInCart(newProduct, cartProducts);
  const sameSize = isSameSize(newProduct, cartProducts);

  // If the product has the same size and is in the cart, update its quantity
  if (prodInCart && sameSize) {
    const newArray = cartProducts.map( prod => {
      if (prod._id === newProduct._id && prod.size === newProduct.size) {
        return { ...prod, quantity: prod.quantity + newProduct.quantity };
      }
      return prod;
    })
    console.log(newArray);
    return newArray;
  }

  const newArray = [...cartProducts, newProduct];
  console.log(newArray);
  return newArray;
}

const AppContext = createContext<null | any>(null);

const useAppContext = () => {
  return useContext(AppContext);
}

const initialState: CartProduct[]  = [];

const reducer = (state: CartProduct[], action: {type: string, value: any}) => {
  
  switch (action.type) {
    case productReducer.ADD_PRODUCT:
      return addItemToCart(action.value, state);
  }

  return state;
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      { children }
    </AppContext.Provider>
  )
}

export {
  AppProvider,
  useAppContext
}