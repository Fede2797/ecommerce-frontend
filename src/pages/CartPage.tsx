import { Link } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { frontUrl, productsRoute } from '../config/constants'
import { useAppContext } from '../AppProvider'
import { CartProduct } from '../types/AppTypes'

export const CartPage = () => {

  const { state } = useAppContext();

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
        <div className="max-w-[1200px] mx-auto mt-8">
          <div className="grid grid-cols-6 gap-4 font-bold">
            <div className="col-span-3">Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          {state?.map((product: CartProduct) => (
            <div key={product._id} className="h-[150px] grid grid-cols-6 gap-4 my-2">
              <div className="flex col-span-3">
                <img className='h-full max-h-[120px] p-2 bg-bg-gray' src={product.imgSource} alt="" />
                <span className='font-poppins text-xl'>
                  {product.name}
                </span>
              </div>
              <div>${product.price}</div>
              <div>{product.quantity}</div>
              <div>${product.price * product.quantity}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
