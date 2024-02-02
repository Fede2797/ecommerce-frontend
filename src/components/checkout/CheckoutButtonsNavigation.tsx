import { cartRoute, frontUrl } from '../../config/constants'
import { Link } from 'react-router-dom'

export const CheckoutButtonsNavigation = () => {
  return (
    <div className="mt-[60px] flex text-lg items-center">
      <div className="w-full">
        <Link to={frontUrl + cartRoute}>
          <span className="text-md underline text-green cursor-pointer">
            Back to cart
          </span>
        </Link>
      </div>
      <button className="w-full font-medium text-white bg-green h-10 rounded-[4px]">
        Go to shipping
      </button>
    </div>
  )
}
