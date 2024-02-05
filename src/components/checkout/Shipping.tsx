
export const Shipping = () => {
  // TODO: Make it so the contact and the address are get from the previos page (checkoutpage)
  return (
    <>
      <div className="flex flex-col gap-2">
        <input 
          type="text" 
          id="contact" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          placeholder="Contact"
        />
        <input 
          type="text" 
          id="address" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          placeholder="Ship to"
        />
      </div>
      <div>
        <h1 className="mt-10 font-medium">Shipping method</h1>
        <label htmlFor="helper-radio" className="mt-6 flex items-center ps-4 p-3 border border-gray-200 rounded">
          <div className="flex items-center h-5">
              <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
          </div>
          <div className="ms-2 text-sm">
              <label htmlFor="helper-radio" className="font-medium text-gray-900">Standard Shipping</label>
              <p id="helper-radio-text" className="text-xs font-normal text-gray-500">Free</p>
          </div>
      </label>
      </div>
    </>
  )
}
