import { useAppContext } from '../AppProvider'
import { checkoutSection } from '../config/constants'
import { CartProduct } from '../types/AppTypes'
import {
  CheckoutBreadcrumbs,
  CheckoutLogo,
  CheckoutProductCard,
  CheckoutTotalDetails,
  Confirm,
  Details,
  Payment,
  Shipping
} from '../components/checkout'
import { Accordion } from '../components/Accordion'
import { useEffect, useState } from 'react'
import { countProducts } from '../helpers/checkoutHelper'

export const CheckOutPage = ({ section }: {section: string}) => {
  const { state } = useAppContext()!
  const cartState = state.cartState.cart

  const [productQuantity, setproductQuantity] = useState(0)

  useEffect(() => {
    setproductQuantity(countProducts(cartState))
  }, [cartState])

  const subTotal = cartState.reduce(
    (accumulator: number, product: CartProduct) => accumulator + product.price * product.quantity, 0
  )

  const sectionRender = () => {
    switch (section) {
      case checkoutSection.DETAILS:
        return (<Details />)
      case checkoutSection.SHIPPING:
        return (<Shipping section={section}/>)
      case checkoutSection.PAYMENT:
        return (<Payment section={section} />)
      case checkoutSection.CONFIRM:
        return (<Confirm />)
    }
  }

  return (
    <div className="px-5 h-[100vh] flex flex-col font-roboto tracking-[-0.9px] md:pr-0 md:flex-row">
      {/* Left[desktop]/Bottom[mobile] section */}
      <section className="w-full h-full mr-[120px] flex flex-col md:items-end">
        <article className="h-full w-full flex flex-col md:max-w-[445px] md:pb-24">            <CheckoutLogo section={section} />
        {/* Top[mobile] section (Accordion) */}
        <div className={`mb-8 mx-[-20px] ${section === checkoutSection.CONFIRM ? 'hidden' : 'md:hidden'}`}>
          <Accordion
            controllerElement={(isExpanded: boolean) => (
              <button className='w-full h-20 px-4 bg-bg-gray flex items-center justify-between gap-2 border-[1px] '>
                <figure className="relative w-[30px] h-[30px] flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
                  {/* Circle displaying the amount of products in the cart */}
                  <div className={`absolute right-0 top-0 w-3 h-3 items-center justify-center bg-green rounded-full text-white text-center font-medium text-[10px] ${productQuantity > 0 ? 'flex' : 'hidden'}`}>
                    <span>
                      { productQuantity }
                    </span>
                  </div>
                  <img src="/images/icon-cart.svg" alt="" />
                </figure>
                <div className='flex gap-4'>
                  <span className='font-roboto text-green text-lg'>
                    {isExpanded ? 'Hide' : 'See'} your order details
                  </span>
                  {/* Arrow */}
                  <svg className={`h-4 w-2 my-auto fill-green ${isExpanded ? 'rotate-[270deg]' : 'rotate-90'}`} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="298" height="512" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"/></svg>
                </div>
                <span className='font-poppins text-lg font-medium'>
                  ${subTotal.toFixed(2)}
                </span>
              </button>
            )}
          >
            <div className='bg-bg-gray pt-6 border-b-[1px]'>
              <div className="w-full max-w-[410px] px-1 mb-4 flex flex-col gap-8">
                {
                  cartState.map((product: CartProduct, index: number) => (
                    <CheckoutProductCard product={product} key={index} />
                  ))
                }
              </div>
              <div className="flex justify-between mx-5 pt-4 pb-4 border-t-[1px]">
                <span>
                  Shipping
                </span>
                <span>
                  { section === checkoutSection.DETAILS ? 'Calculated at the next step' : 'Free shipping'}
                </span>
              </div>
            </div>
          </Accordion>
        </div>
        <CheckoutBreadcrumbs section={section} />
        <h1 className={`mb-4 text-md text-red-500 ${section === checkoutSection.CONFIRM ? 'hidden' : ''}`}>* All fields are designed for display only. None of them are mandatory</h1>
        {sectionRender()}
        </article>
      </section>
      {/* Right[desktop] section */}
      <section className="hidden md:flex w-full pt-16 pl-16 pr-5 flex-col items-start bg-[#F2F2F2]">
        {/* Products in cart container */}
        <div className="w-full max-w-[410px] mb-4 pb-12 flex flex-col gap-8 border-b-[1px]">
          {
            cartState.map((product: CartProduct, index: number) => (
              <CheckoutProductCard product={product} key={index} />
            ))
          }
        </div>
        <CheckoutTotalDetails section={section} subTotal={subTotal} />
      </section>
    </div>
  )
}
