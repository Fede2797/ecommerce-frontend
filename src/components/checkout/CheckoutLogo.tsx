import { Link } from 'react-router-dom'
import { frontUrl } from '../../config/constants'

export const CheckoutLogo = () => {
  return (
    <div className="h-[75px] flex items-center text-xl font-bold">
      <Link to={frontUrl}>
        <span className="cursor-pointer tracking-[-0.5px]">
          Urbaneer
        </span>
      </Link>
    </div>
  )
}
