
export const CheckoutTotalDetails = ({subTotal}: {subTotal: number}) => {
  return (
    <>
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
    </>
  )
}
