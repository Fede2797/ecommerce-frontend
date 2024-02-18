import { provincias } from '../../config/constants'

export const Details = () => {
  return (
    <form 
      onSubmit={handleSubmitForm}
    >
      {/* Contact */}
      <div className="flex flex-col gap-2">
        <h1 className="font-medium">Contact</h1>
        {/* Contact input */}
        <input 
          type="text" 
          id="contact" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          placeholder="Email or mobile phone number"
        />
      </div>
      {/* Shipping Address */}
      <div className="mt-8 flex flex-col gap-2">
        <h1 className="font-medium">Shipping Address</h1>
        <div className="flex gap-3">
          {/* Name input */}
          <input 
            type="text" 
            id="first_name" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="Name"
          />
          {/* Last name input */}
          <input 
            type="text" 
            id="last_name" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="Last Name"
          />
        </div>
        {/* Address and number */}
        <input 
          type="text" 
          id="address" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          placeholder="Address and number"
        />
        {/* Shipping note */}
        <input 
          type="text" 
          id="note" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          placeholder="Shipping note"
        />
        <div className="flex gap-3">
          {/* City */}
          <input 
            type="text" 
            id="city" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="City"
          />
          {/* Zip Code */}
          <input 
            type="text" 
            id="zipcode" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="Zip code"
          />
        </div>
        <select 
          id="order" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        >
          {
            provincias.map( option => 
              <option 
                value={option.name}
                id={option.id}
                key={option.id}
              >
                {option.name}
              </option> 
            )
          }
        </select>
      </div>
      {/* <CheckoutButtonsNavigation section={section}/> */}
      <nav className={`mt-[60px] flex text-lg items-center`}>
        <div className="w-full">
          <button 
            type="button"
            onClick={() => handleButtonNavigateBackward(checkoutButtons[0].backButtonRoute)}
          >
            <span className="text-md underline text-green cursor-pointer">
              {checkoutButtons[0].backButtonName}
            </span>
          </button>
        </div>
        <button 
          type="submit"
          className='w-full flex items-center justify-center font-medium text-white bg-green h-10 rounded-[4px]'
        >
          <span>
            {checkoutButtons[0].forwardButtonName}
          </span>
        </button>
      </nav>
    </form>
  )
}
