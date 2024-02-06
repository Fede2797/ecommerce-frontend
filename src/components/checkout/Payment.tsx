
export const Payment = () => {

  // TODO: Finish "Billing address section"
  // const [billingAddress, setBillingAddress] = useState();


  return (
    <>
      <div className="flex flex-col gap-2">        
        <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                Contact
            </div>
            <input type="text" id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-20 p-2.5" placeholder="Contact" />
        </div>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                Ship to
            </div>
            <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-20 p-2.5" placeholder="Ship to" />
        </div>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                Method
            </div>
            <input type="text" id="method" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-20 p-2.5" placeholder="Method" />
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-medium">Payment method</h1>
      </div>
      <div className="relative mt-6 bg-white rounded-lg border-[1px]">
          <div className="flex items-center p-3 rounded-t bg-[#56B280] bg-opacity-20">
              <img className="w-[33px] h-[33px] mr-4" src="/credit-card.svg" alt="" />
              <h3 className="text-green font-bold tracking-normal">
                  Credit Card
              </h3>
          </div>
          <div className="p-4 flex flex-col gap-2">
            {/* Card number */}
            <div className="relative">
              <input 
                type="text" 
                id="input" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Card number"
              />
            </div>
            {/* Holder name */}
            <div className="relative">
              <input 
                type="text" 
                id="input" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Holder name"
              />
            </div>
            <div className="flex gap-3">
              {/* Expiration */}
              <input 
                type="text" 
                id="input" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Expiration (MM/YY)"
              />
              {/* Last name input */}
              <input 
                type="text" 
                id="input" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="CCV"
              />
            </div>
          </div>
      </div>
      {/* <div className="mt-10">
        <h1 className="font-medium">Billing Address</h1>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="helper-radio1" className="mt-6 flex items-center ps-4 p-3 border border-gray-200 rounded">
          <div className="flex items-center h-5">
              <input 
                checked 
                name="billing" 
                id="helper-radio1" 
                type="radio" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" 
              />
          </div>
          <div className="ms-2 text-sm">
              <label htmlFor="helper-radio1" className="font text-gray-900">Same as the shipping address</label>
          </div>
        </label>
        <label htmlFor="helper-radio2" className="flex items-center ps-4 p-3 border border-gray-200 rounded">
          <div className="flex items-center h-5">
              <input 
                name="billing" 
                id="helper-radio2" 
                type="radio" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" 
              />
          </div>
          <div className="ms-2 text-sm">
              <label htmlFor="helper-radio2" className="font text-gray-900">Use a different address for billing</label>
          </div>
        </label>
      </div> */}
    </>
  )
}
