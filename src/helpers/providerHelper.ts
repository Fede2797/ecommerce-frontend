import { CartProduct } from "../types/AppTypes";

// Checks if the new product is in the cart
export const isProdInCart = (product: CartProduct, cart: CartProduct[]) => {
  let inCart = false;
  // Check if the product is already in the cart
  for (const prod  of cart) {
    if (prod._id === product._id && prod.size === product.size) {
      inCart = true;
    }
  };
  return inCart;
}

export const addItemToCart = (newProduct: CartProduct, cartProducts: CartProduct[]) => {
  
  const prodInCart = isProdInCart(newProduct, cartProducts);

  if (!prodInCart) {
    const newArray = [...cartProducts, newProduct];
    return newArray;
  }

  const newArray = cartProducts.map( prod => {
    if (prod._id === newProduct._id && prod.size === newProduct.size) {
      return { ...prod, quantity: prod.quantity + newProduct.quantity };
    }
    return prod;
  })
  return newArray;
}

export const removeItemFromCart = (productRemove: CartProduct, cartProducts: CartProduct[]) => {
  const prodInCart = isProdInCart(productRemove, cartProducts);

  if (!prodInCart) return cartProducts;

  const newArray = cartProducts.filter( prod => { 
    return (prod._id === productRemove._id && prod.size === productRemove.size) 
      ? false
      : true
  });
  return newArray;
}

export const changeItemQuantity = (productToChange: CartProduct, cartProducts: CartProduct[]) => {
  const prodInCart = isProdInCart(productToChange, cartProducts);
  if (!prodInCart) return cartProducts;

  const newArray = cartProducts.map( prod => {
    if (prod._id === productToChange._id && prod.size === productToChange.size) {
      return { ...prod, quantity: productToChange.quantity };
    }
    return prod;
  });
  return newArray;
}