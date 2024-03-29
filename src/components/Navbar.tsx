import { Link } from 'react-router-dom'
import { cartRoute, frontUrl, kidsRoute, menRoute, womenRoute } from '../config/constants'
import { useAppContext } from '../AppProvider'
import { useEffect, useState } from 'react'
import { SideNavbar } from './SideNavbar'
import { countProducts } from '../helpers/checkoutHelper'

export const Navbar = () => {
  const { state } = useAppContext()!
  const cartState = state.cartState.cart

  const [productQuantity, setproductQuantity] = useState(0)

  useEffect(() => {
    setproductQuantity(countProducts(cartState))
  }, [cartState])

  return (
    <>
      <div className="fixed top-0 w-full bg-white border-b-[1px] border-gray-200 hidden md:block z-30">
        <div className="w-full max-w-[1200px] h-[72px] mx-auto flex items-center justify-between">
          {/* Left side navbar */}
          <Link to={frontUrl}>
            <div className="p-5 font-bold cursor-pointer tracking-[-0.5px]">
              Urbaneer
            </div>
          </Link>
          {/* Middle navbar */}
          <ul className="w-full max-w-[400px] p-4 gap-10 flex justify-between font-roboto">
            <Link to={frontUrl + womenRoute}>
              <div className="px-4">
                <li className="my-2 flex items-center justify-center rounded-full cursor-pointer hover-underline-animation">
                  Women
                </li>
              </div>
            </Link>
            <Link to={frontUrl + menRoute}>
              <div className="px-4">
                <li className="my-2 flex items-center justify-center rounded-full cursor-pointer hover-underline-animation">
                  Men
                </li>
              </div>
            </Link>
            <Link to={frontUrl + kidsRoute}>
              <div className="px-4">
                <li className="my-2 flex items-center justify-center rounded-full cursor-pointer hover-underline-animation">
                  Kids
                </li>
              </div>
            </Link>
          </ul>
          {/* Right side navbar */}
          <div className="p-5">
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
          </div>
        </div>
      </div>
      <SideNavbar productQuantity={productQuantity} />
    </>
  )
}
