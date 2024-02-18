import { Link } from 'react-router-dom'
import { checkoutSection, frontUrl } from '../../config/constants'

export const CheckoutLogo = ({section}: {section: string}) => {
  return (
    <div className="h-[75px] flex items-center text-xl font-bold">
      <Link to={ section !== checkoutSection.CONFIRM ? frontUrl : "#"}>
        <span className="cursor-pointer tracking-[-0.5px]">
          Urbaneer
        </span>
      </Link>
    </div>
  )
}
