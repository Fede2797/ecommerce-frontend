import React from 'react'
import { Link } from 'react-router-dom'
import { checkoutRoute, frontUrl, productsRoute, singleProductRoute } from '../config/constants'
import { CartProduct } from '../types/AppTypes'

interface MobileCartProps {
  cartState: CartProduct[];
  handleRemoveProduct: (product: CartProduct) => void;
  substractQuantity: (product: CartProduct) => void;
  changeQuantity: (event: React.FormEvent<HTMLInputElement>, product: CartProduct) => void;
  addQuantity: (product: CartProduct) => void;
  noProductsInCart: boolean;
  totalPrice: number;
}

// TODO: Make product name show "..." when span is overflowed

export const MobileCart = ({ cartState, handleRemoveProduct, substractQuantity, changeQuantity, addQuantity, noProductsInCart, totalPrice }: MobileCartProps) => {
  return (
    <div className='md:hidden'>
     {/* Top section */}
     <section className='flex flex-col px-5'>
        <h1 className='mt-12 font-poppins text-lg'>Your cart items</h1>
        <div className='mt-4 flex'>
          <Link to={frontUrl + productsRoute}>
            <span className='mx-auto text-sm underline text-green'>
              Back to shopping
            </span>
          </Link>
        </div>
      </section>
      {/* Products in cart section */}
      <section className='mx-5 mt-8 pt-4 font-roboto border-t-[1px]'>
        {
          cartState.map((product: CartProduct) => (
            <div key={product._id + product.size} className="mb-5 h-[90px] grid grid-cols-5 gap-4 my-2">
              <div className="flex col-span-3">
                {/* Left side image */}
                <figure className='w-[90px] h-[90px] flex justify-center items-center p-2 bg-bg-gray'>
                  <img className='m-auto min-w-[50px]' src={product.imgSource} alt="" />
                </figure>
                {/* Right side info */}
                <div className='w-full p-2 flex flex-col gap-2'>
                  <Link to={frontUrl + singleProductRoute + product._id}>
                    <span className='w-full font-poppins text-sm'>
                      {product.name}
                    </span>
                  </Link>
                  <button
                    className='mr-auto underline text-green text-sm'
                    onClick={() => handleRemoveProduct(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              {/* Product price */}
              <div className='flex flex-col items-end justify-center col-span-2'>
                <div className='p-2 flex items-center justify-end'>${product.price}</div>
                {/* Product quantity */}
                <div className='p-2 flex items-center justify-end'>
                  <div className="w-[80px] h-[30px] px-1 flex justify-around items-center text-lg border-[1px] border-green">
                    <button
                      className="w-full text-green"
                      onClick={() => product.quantity > 1 && substractQuantity(product)}
                    >
                      -
                    </button>
                    <input
                      className="border-none w-full text-center focus:outline-none"
                      type="text"
                      value={product.quantity}
                      onChange={(event) => changeQuantity(event, product)}
                    />
                    <button
                      className="w-full text-green"
                      onClick={() => addQuantity(product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        {/* No products in cart */}
        {
          noProductsInCart && <h1 className='mb-10 mt-6 text-center text-xl font-poppins'>No products in the cart</h1>
        }
        <div className='mb-[100px] mt-6 pt-10 border-t-[1px] flex flex-col items-center'>
          {/* Subtotal */}
          <div className='flex flex-col'>
            <div className='w-full flex self-end justify-between items-start text-xl font-medium'>
              <span>Sub-total </span>
              <span>${(totalPrice).toFixed(2)}</span>
            </div>
            <span className='mt-2 text-md text-[#9E9E9E] font-roboto font-normal'>Tax and shipping cost will be calculated later</span>
          </div>
          {/* Checkout button */}
          <div className='w-full max-w-[223px]'>
            <Link to={frontUrl + checkoutRoute}>
              <button
                className={`w-full h-10 mt-6 text-white rounded-[4px] text-xl ${noProductsInCart ? 'bg-gray-400' : 'bg-green'}`}
                disabled={noProductsInCart}
              >
                Check-out
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
