import { useAppContext } from "../AppProvider"
import { checkoutSection } from "../config/constants";
import { CartProduct } from '../types/AppTypes';
import { CheckoutBreadcrumbs,
  CheckoutButtonsNavigation,
  CheckoutLogo,
  CheckoutProductCard,
  CheckoutTotalDetails,
  Details,
  Shipping } from "../components/checkout";

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
          <CheckoutLogo />
          <CheckoutBreadcrumbs />
          {
            section === checkoutSection.DETAILS && <Details />
          }
          {
            section === checkoutSection.SHIPPING && <Shipping />
          }
          {
            // section === checkoutSection.PAYMENT && <Payment />
          }
          <CheckoutButtonsNavigation />
        </article>
      </section>
      {/* Right section */}
      <section className="w-full pt-16 pl-16 flex flex-col items-start bg-[#F2F2F2]">
        {/* Products in cart container */}
        <div className="w-full max-w-[410px] mb-4 pb-12 flex flex-col gap-8 border-b-[1px]">
          {
            state.map((product: CartProduct, index: number) => (
              <CheckoutProductCard product={product} key={index} />
            ))
          }
        </div>
        <CheckoutTotalDetails subTotal={subTotal} />
      </section>
    </div>
  )
}
