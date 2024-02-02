import { Link } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { checkoutRoute, frontUrl, productReducer, productsRoute, singleProductRoute } from '../config/constants';
import { useAppContext } from '../AppProvider'
import { CartProduct } from '../types/AppTypes'
import { useEffect, useState } from 'react'

export const CartPage = () => {

  const { state, dispatch } = useAppContext();
  
  const [noProductsInCart, setNoProductsInCart] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    if (state.length === 0) {
      setNoProductsInCart(true);
      return;
    }
    
    const total = state.reduce(
      (accumulator: number, product: CartProduct) => accumulator + product.price * product.quantity, 0
    );

    console.log({total});

    setTotalPrice(total);
    setNoProductsInCart(false);
  }, [state])
  

  const handleRemoveProduct = (product: CartProduct) => {
    dispatch({
      type: productReducer.REMOVE_PRODUCT,
      value: {
        _id: product._id,
        name: product.name,
        price: product.price,
        size: product.size,
        imgSource: product.imgSource,
        quantity: product.quantity,
      }
    });
  }

  const addQuantity = (product: CartProduct) => {
    handleQuantityChange({...product, quantity: product.quantity + 1});
  }

  const substractQuantity = (product: CartProduct) => {
    handleQuantityChange({...product, quantity: product.quantity - 1});
  }

  const changeQuantity = (event: React.FormEvent<HTMLInputElement>, product: CartProduct) => {
    const number = parseInt(event.currentTarget.value);
    if ( isNaN(number) || number === 0) return;

    handleQuantityChange({...product, quantity: number});
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
        quantity: product.quantity,
      }
    });
  }

  return (
    <Layout>
      {/* Top section */}
      <section className='flex flex-col'>
        <h1 className='mt-12 font-poppins text-[40px] text-center'>Your cart items</h1>
        <div className='mt-4 flex justify-center'>
          <Link to={frontUrl + productsRoute}>
            <span className='mx-auto text-md text-center underline text-green'>
              Back to shopping
            </span>
          </Link>
        </div>
      </section>
      {/* Products in cart section */}
      <section>
        <div className="max-w-[1200px] mx-auto mt-8 font-roboto">
          <div className="pb-[15px] mb-8 grid grid-cols-6 gap-4 font-medium border-b-[1px] text-right">
            <div className="px-2 col-span-3 text-left">Product</div>
            <div className='px-2'>Price</div>
            <div className='px-2'>Quantity</div>
            <div className='px-2'>Total</div>
          </div>

          {
            state.map((product: CartProduct) => (
              <div key={product._id} className="mb-5 h-[120px] grid grid-cols-6 gap-4 my-2">
                <div className="flex col-span-3">
                  {/* Left side image */}
                  <figure className='w-[120px] h-[120px] flex justify-center items-center p-2 bg-bg-gray'>
                    <img className='m-auto' src={product.imgSource} alt="" />
                  </figure>
                  {/* Right side info */}
                  <div className='p-2 flex flex-col gap-2'>
                    <Link to={frontUrl + singleProductRoute + product._id}>
                      <span className='font-poppins text-xl'>
                        {product.name}
                      </span>
                    </Link>
                    <button 
                      className='mr-auto underline text-green'
                      onClick={() => handleRemoveProduct(product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                {/* Product price */}
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
                {/* Product total price */}
                <div className='p-2 flex items-center justify-end'>${(product.price * product.quantity).toFixed(2)}</div>
              </div>
            ))
          }
          {/* No products in cart */}
          { 
            noProductsInCart && <h1 className='my-20 text-center text-2xl font-poppins'>No products in the cart</h1>
          }
          <div className='mb-[140px] mt-6 pt-10 border-t-[1px] flex justify-end'>
            {/* Subtotal */}
            <div className='flex flex-col mr-10'>
              <div className='w-full flex self-end justify-between items-start max-w-[200px] text-xl font-medium'>
                <span>Sub-total </span>
                <span>${(totalPrice).toFixed(2)}</span>
              </div>
              <span className='mt-2 text-md text-[#9E9E9E] font-roboto font-normal'>Tax and shipping cost will be calculated later</span>
            </div>
            {/* Checkout button */}
            <Link to={frontUrl + checkoutRoute} className='w-full max-w-[223px]'>
              <button 
                className={`w-full h-10 text-white rounded-[4px] text-xl ${noProductsInCart ? "bg-gray-400" : "bg-green"}`}
                disabled={noProductsInCart}
              >
                Check-out
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
