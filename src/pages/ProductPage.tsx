import { Layout } from '../layout/Layout'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import React, { useEffect, useState } from 'react'
import { SizeButton } from '../components'
import { useParams } from 'react-router-dom'
import { ProductType } from '../types/AppTypes'
import { getProductById } from '../api/getProducts'
import { useAppContext } from '../AppProvider'
import { ToastContainer, toast } from 'react-toastify'
import { productReducer } from '../config/constants'

const notifySucces = () => toast.success('Product added to the cart')

export const ProductPage = () => {
  const { productId } = useParams()
  const { dispatch } = useAppContext()!

  const [product, setProduct] = useState<ProductType>()
  const [validations, setValidations] = useState<string[]>([])
  const [sizeSelected, setSizeSelected] = useState<number | undefined>()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return
      const response = await getProductById(productId)
      setProduct(response.data)
    }
    fetchProduct()
  }, [productId])

  const handleQuantityChange = (e: React.FormEvent<HTMLInputElement>) => {
    const number = parseInt(e.currentTarget.value)
    if (isNaN(number) || number === 0) return

    setQuantity(number)
  }

  const handleAddToCart = () => {
    // Validate the product exists and a size is selected
    if (!product || !sizeSelected) {
      if (!sizeSelected) {
        const newValidations = [...validations]
        newValidations.push('*Remember to pick a size')
        setValidations(newValidations)
      }
      return
    }

    // Reset warning validations
    setValidations([])

    // Dispatch action to add product to the cart
    dispatch({
      type: productReducer.ADD_PRODUCT,
      value: {
        _id: product._id,
        name: product.name,
        price: product.price,
        size: sizeSelected,
        imgSource: product.imgSource,
        quantity
      }
    })

    // Notification
    notifySucces()
  }

  return (
    <Layout>
      <section className="w-full max-w-[1200px] px-4 py-10 m-auto flex justify-center gap-6">
        {/* Product image */}
        <div className="w-full flex justify-end">
          <figure className="max-w-[500px] h-[400px] flex justify-center items-center bg-[#F7F8FA] overflow-hidden">
            {/* Image-Zoom component */}
            <Zoom>
                <img
                  alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                  src={product?.imgSource}
                  className="p-4"
                  // width="500"
                />
            </Zoom>
          </figure>
        </div>
        {/* Product Details */}
        <ul className="w-full">
          {/* Shoes name */}
          <li className="text-[26px] font-medium line">
            Air Jordan shoes Nike
          </li>
          {/* Shoes description */}
          <li className="mt-3">
            {product?.description}
          </li>
          {/* Sizes container */}
          <li className="mt-3">
            <div className="max-w-[230px] grid grid-cols-5 grid-rows-2 gap-2">
              {
                product?.sizes.map(size => (
                  <SizeButton key={size.size} size={size} sizeSelected={sizeSelected} setSizeSelected={setSizeSelected}/>
                ))
              }
            </div>
          </li>
          {/* Price/Quantity/Add to cart buttons */}
          <li className="flex flex-col mt-2">
            <div className="flex gap-5 items-center">
              {/* Price */}
              <div className="text-[26px] text-green font-semibold tracking-tighter">
                ${product?.price}
              </div>
              {/* Quantity */}
              <div className="w-[80px] h-[30px] px-1 flex justify-around items-center text-lg border-[1px] border-green">
                <button
                  className="w-full text-green"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>
                <input
                  className="border-none w-full text-center focus:outline-none"
                  type="text"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button
                  className="w-full text-green"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            {/* Add to cart button */}
            <button
              className="max-w-[350px] h-[42px] w-full mt-1 flex items-center justify-center gap-2 bg-green text-white rounded-[4px] text-[20px] hover:bg-[#458f66] transition-all"
              onClick={handleAddToCart}
            >
              <span>
                <img className="invert-[100%]" src="/images/icon-cart.svg" alt="" />
              </span>
              + Add to cart
            </button>
            {
              validations.map((validation, index) => (
                <span key={index} className={'text-red-500'}>
                  {validation}
                </span>
              ))
            }
          </li>
        </ul>
      </section>
      <ToastContainer position="bottom-right" />
    </Layout>
  )
}
