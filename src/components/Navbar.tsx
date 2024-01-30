import { Link } from "react-router-dom";
import { frontUrl, kidsRoute, menRoute, womenRoute } from "../config/constants";
import { useAppContext } from "../AppProvider";
import { CartProduct } from "../types/AppTypes";
import { useEffect, useState } from "react";

const countProducts = ( cart: CartProduct[] ) => {
  const initialValue = 0;
  const count = cart.reduce( (acum, current) => acum + current.quantity, initialValue);
  return count;
}

export const Navbar = () => {

  const { state } = useAppContext();
  const [productQuantity, setproductQuantity] = useState(0);

  useEffect(() => {
    setproductQuantity( countProducts( state ) );
  }, [state])
  

  return (
    <div className="w-full bg-white border-b-[1px] border-gray-200">
      <div className="w-full max-w-[1200px] min-h-[72px] mx-auto flex items-center justify-between">
        {/* Left side navbar */}
        <Link to={frontUrl}>
          <div className="p-4 font-bold cursor-pointer">
            Urbaneer
          </div>
        </Link>
        {/* Middle navbar */}
        <ul className="w-full max-w-[400px] p-4 gap-10 flex justify-between font-roboto">
          <Link to={frontUrl + womenRoute}>
            <li className="px-5 py-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
              Women
            </li>
          </Link>
          <Link to={frontUrl + menRoute}>
            <li className="px-5 py-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
              Men
            </li>
          </Link>
          <Link to={frontUrl + kidsRoute}>
            <li className="px-5 py-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
              Kids
            </li>
          </Link>
        </ul>
        {/* Right side navbar */}
        <div className="p-4">
          <figure className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
            
            <div className={`absolute right-1 top-1 w-4 h-4 items-center justify-center bg-green rounded-full text-white text-center font-medium text-xs ${ productQuantity > 0 ? "flex" : "hidden"}`}>
              <span>
                { productQuantity }
              </span>
            </div>
            <img src="/images/icon-cart.svg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  )
}
