import { Layout } from '../layout/Layout'
import { productReducer } from '../config/constants'
import { useAppContext } from '../AppProvider'
import { CartProduct } from '../types/AppTypes'
import React, { useEffect, useState } from 'react'
import { MobileCart } from '../components/MobileCart'
import { DesktopCart } from '../components/DesktopCart'

export const CartPage = () => {
  const { state, dispatch } = useAppContext()!
  const cartState = state.cartState.cart

  const [noProductsInCart, setNoProductsInCart] = useState(true)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (cartState.length === 0) {
      setNoProductsInCart(true)
      return
    }

    const total = cartState.reduce(
      (accumulator: number, product: CartProduct) => accumulator + product.price * product.quantity, 0
    )

    setTotalPrice(total)
    setNoProductsInCart(false)
  }, [cartState])

  const handleRemoveProduct = (product: CartProduct) => {
    dispatch({
      type: productReducer.REMOVE_PRODUCT,
      value: {
        _id: product._id,
        name: product.name,
        price: product.price,
        size: product.size,
        imgSource: product.imgSource,
        quantity: product.quantity
      }
    })
  }

  const addQuantity = (product: CartProduct) => {
    handleQuantityChange({ ...product, quantity: product.quantity + 1 })
  }

  const substractQuantity = (product: CartProduct) => {
    handleQuantityChange({ ...product, quantity: product.quantity - 1 })
  }

  const changeQuantity = (event: React.FormEvent<HTMLInputElement>, product: CartProduct) => {
    const number = parseInt(event.currentTarget.value)
    if (isNaN(number) || number === 0) return

    handleQuantityChange({ ...product, quantity: number })
  }

  const handleQuantityChange = (product: CartProduct) => {
    dispatch({
      type: productReducer.CHANGE_QUANTITY,
      value: {
        _id: product._id,
        name: product.name,
        price: product.price,
        size: product.size,
        imgSource: product.imgSource,
        quantity: product.quantity
      }
    })
  }

  return (
    <Layout>
      <DesktopCart
        cartState={cartState}
        handleRemoveProduct={handleRemoveProduct}
        substractQuantity={substractQuantity}
        changeQuantity={changeQuantity}
        addQuantity={addQuantity}
        noProductsInCart={noProductsInCart}
        totalPrice={totalPrice}
      />
      <MobileCart
        cartState={cartState}
        handleRemoveProduct={handleRemoveProduct}
        substractQuantity={substractQuantity}
        changeQuantity={changeQuantity}
        addQuantity={addQuantity}
        noProductsInCart={noProductsInCart}
        totalPrice={totalPrice}
      />
    </Layout>
  )
}
