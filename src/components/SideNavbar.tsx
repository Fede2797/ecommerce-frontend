import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckoutLogo } from './checkout/CheckoutLogo'
import { cartRoute, frontUrl } from '../config/constants'

export const SideNavbar = ({ productQuantity }: {productQuantity: number}) => {
  const [toggleNav, setToggleNav] = useState(false)
  const toggleSideNav = () => {
    setToggleNav(!toggleNav)
  }
  return (
    <div className="fixed top-0 w-full h-[72px] px-6 flex items-center justify-between bg-white border-b-[1px] border-gray-200 md:hidden z-30">
      <button onClick={toggleSideNav}>
        <img src="/hamburger-menu.svg" alt="" />
      </button>
      <CheckoutLogo section="" />
      <Link to={frontUrl + cartRoute}>
        <figure className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
          {/* Circle displaying the amount of products in the cart */}
          <div className={`absolute right-1 top-1 w-4 h-4 items-center justify-center bg-green rounded-full text-white text-center font-medium text-xs ${productQuantity > 0 ? 'flex' : 'hidden'}`}>
            <span>
              { productQuantity }
            </span>
          </div>
          <img src="/images/icon-cart.svg" alt="" />
        </figure>
      </Link>
      <div
        className={`top-[72px] left-0 right-0 h-[100vh] w-[100%] fixed flex z-40  ease-in-out duration-300 ${toggleNav ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='w-[70%] h-full bg-white'>
          <h3 className="text-4xl font-semibold">I am a sidebar</h3>
        </div>
        <button onClick={toggleSideNav} className={`h-full ${toggleNav ? 'w-[30%]' : 'w-0'}`}>
        </button>
      </div>
    </div>
  )
}
