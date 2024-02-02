import { Link } from "react-router-dom";
import { useAppContext } from "../AppProvider"
import { cartRoute, checkoutSection, frontUrl } from "../config/constants";
import { CartProduct } from '../types/AppTypes';
import { Details } from "../components/checkout/Details";

export const CheckOutPage = ({section}: {section: string}) => {

  const { state } = useAppContext();

  const subTotal = state.reduce(
    (accumulator: number, product: CartProduct) => accumulator + product.price * product.quantity, 0
  );

  return (
    <div className="min-h-[100vh] flex font-roboto tracking-[-0.9px]">
      {/* Left section */}
      <section className="w-full mr-[120px] flex flex-col items-end">
        <article className="w-full max-w-[445px]">
          {/* Home */}
          <div className="h-[75px] flex items-center text-xl font-bold">
            <span className="cursor-pointer tracking-[-0.5px]">
              Urbaneer
            </span>
          </div>
          {/* Breadcrumbs */}
          <ul className="mb-11 flex items-center gap-3 font-medium">
            <li>Cart</li>
            <img className="h-[10px]" src="/chevron-right.svg" alt="" />
            <li>Details</li>
            <img className="h-[10px]" src="/chevron-right.svg" alt="" />
            <li>Shipping</li>
            <img className="h-[10px]" src="/chevron-right.svg" alt="" />
            <li>Payment</li>
          </ul>
          
          {/* Details section */}
          {
            section === checkoutSection.DETAILS && <Details />
          }
          

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
        </article>
      </section>
      {/* Right section */}
      <section className="w-full pt-16 pl-16 flex flex-col items-start bg-[#F2F2F2]">
        {/* Products in cart container */}
        <div className="w-full max-w-[410px] mb-4 pb-12 flex flex-col gap-8 border-b-[1px]">
          {
            state.map((product: CartProduct, index: number) => (
              <article key={index} className="flex gap-12">
                <figure className='relative w-[120px] h-[120px] flex justify-center items-center p-2 bg-bg-gray'>
                  <div className="absolute w-5 h-5 flex items-center justify-center bg-green top-[-5px] right-[-5px] rounded-full text-white text-center">
                    <span>
                      {product.quantity}
                    </span>
                  </div>
                  <img className='m-auto' src={product.imgSource} alt="" />
                </figure>
                <div className="flex flex-col font-poppins">
                  <span className="font-medium">
                    {product.name}
                  </span>
                  <span className="mt-3 font-semibold text-[21px] text-green">
                    ${product.price}
                  </span>
                </div>
              </article>
            ))
          }
        </div>
        <div className="w-full max-w-[410px] mb-4 pb-8 flex flex-col gap-3 border-b-[1px] font-roboto text-[14px]">
          <div className="flex justify-between">
            <span>
              Subtotal
            </span>
            <span>
              ${subTotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>
              Shipping
            </span>
            <span>
              Calculated at the next step
            </span>
          </div>
        </div>
        <div className="w-full max-w-[410px] mb-4 pb-8 flex justify-between font-roboto text-[14px]">
          <span>
            Total
          </span>
          <span className="font-poppins text-2xl font-medium">
            ${subTotal.toFixed(2)}
          </span>
        </div>
      </section>
    </div>
  )
}
