import React from 'react'

export const CheckoutBreadcrumbs = () => {
  return (
    <ul className="mb-11 flex items-center gap-3 font-medium">
      <li>Cart</li>
      <img className="h-[10px]" src="/chevron-right.svg" alt="" />
      <li>Details</li>
      <img className="h-[10px]" src="/chevron-right.svg" alt="" />
      <li>Shipping</li>
      <img className="h-[10px]" src="/chevron-right.svg" alt="" />
      <li>Payment</li>
    </ul>
  )
}
