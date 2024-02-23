import { CartProduct } from '../types/AppTypes'

export const countProducts = (cart: CartProduct[]) => {
  const initialValue = 0
  const count = cart.reduce((acum, current) => acum + current.quantity, initialValue)
  return count
}
