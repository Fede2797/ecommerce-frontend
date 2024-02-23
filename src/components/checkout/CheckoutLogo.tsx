import { Link } from 'react-router-dom'
import { checkoutSection, frontUrl } from '../../config/constants'

export const CheckoutLogo = ({ section }: {section: string}) => {
  return (
    // For some reason it needs this div to keep the height of the inner Link to be 75px
    <div>
      <Link className='h-[75px] flex justify-center items-center text-xl font-bold md:justify-start' to={ section !== checkoutSection.CONFIRM ? frontUrl : '#'}>
        <span className="cursor-pointer tracking-[-0.5px]">
          Urbaneer
        </span>
      </Link>
    </div>
  )
}
