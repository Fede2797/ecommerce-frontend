import { Link } from "react-router-dom";
import { frontUrl, kidsRoute, menRoute, womenRoute } from "../config/constants";

export const Navbar = () => {
  return (
    <div className="w-full bg-white border-b-[1px] border-gray-200">
      <div className="w-full max-w-[1200px] min-h-[72px] mx-auto flex items-center justify-between">
        {/* Left side navbar */}
        <div className="p-4 font-bold cursor-pointer">
          <Link to={frontUrl}>Urbaneer</Link>
        </div>
        {/* Middle navbar */}
        <ul className="w-full max-w-[400px] p-4 gap-10 flex justify-between font-roboto">
          <li className="px-5 py-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
            <Link to={frontUrl + womenRoute}>Women</Link>
          </li>
          <li className="px-5 py-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
            <Link to={frontUrl + menRoute}>Men</Link>
          </li>
          <li className="px-5 py-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
            <Link to={frontUrl + kidsRoute}>Kids</Link>
          </li>
        </ul>
        {/* Right side navbar */}
        <div className="p-4">
          <figure className="w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
            <img src="/images/icon-cart.svg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  )
}
