import { Link } from "react-router-dom"
import { frontUrl, productReducer } from "../../config/constants"
import { useAppContext } from "../../AppProvider"

export const Confirm = () => {

  const { dispatch } = useAppContext();

  const handleEndBuy = () => {
    dispatch({ type: productReducer.EMPTY_CART });
  }

  return (
    <div className="flex flex-col font-poppins">
      {/* Check circle icon */}
      <img className="w-full h-full max-w-[100px] max-h-[100px] m-auto mt-8 opacity-60" src="/check-circle.svg" alt="" />
      {/* Payment confirmed */}
      <h1 className="mt-4 text-[26px] font-medium text-center">Payment confirmed</h1>
      <p className="text-center text-[#818181] font-normal"> Thank you for buying Urbaneer. Now that your order is confirmed it will be ready to ship in 2 days. Please check your inbox in the future for your order updates.</p>
      <Link className="w-full max-w-[250px] mx-auto mt-10 flex items-center justify-center font-medium text-white bg-green h-10 rounded-[4px]" to={frontUrl}>
        <button className="w-full h-full" onClick={handleEndBuy}>
          Back to shopping
        </button>
      </Link>
    </div>
  )
}
