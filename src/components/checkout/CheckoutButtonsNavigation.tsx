import { cartRoute, checkoutRoute, frontUrl, shippingRoute } from '../../config/constants'
import { Link } from 'react-router-dom'

export const CheckoutButtonsNavigation = () => {
  return (
    <nav className="mt-[60px] flex text-lg items-center">
      <div className="w-full">
        <Link to={frontUrl + cartRoute}>
          <span className="text-md underline text-green cursor-pointer">
            Back to cart
          </span>
        </Link>
      </div>
      <Link className='w-full flex items-center justify-center font-medium text-white bg-green h-10 rounded-[4px]' to={frontUrl + shippingRoute}>
        <span>
          Go to shipping
        </span>
      </Link>
    </nav>
  )
}
