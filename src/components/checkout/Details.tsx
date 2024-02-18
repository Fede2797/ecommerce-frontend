import { useAppContext } from '../../AppProvider';
import { checkoutButtons, formReducerConst, provincias } from '../../config/constants';
import { useNavigate } from 'react-router-dom';

const defaultValues = {
  contact: "example@gmail.com",
  first_name: "John",
  last_name: "Doe",
  note: "",
  city: "Buenos Aires",
  zipcode: "C1043",
  state: "Buenos Aires",
  address: "Av. Corrientes 1368",
}

export const Details = () => {

  const { state, dispatch } = useAppContext()!;

  const formState = state.formState;
  
  const navigate = useNavigate();

  const handleButtonNavigateBackward = (buttonRoute: string | undefined) => {
    dispatch({ type: formReducerConst.EMPTY_FORM });
    navigate(buttonRoute ? "/" + buttonRoute : "#");
  }

  const handleButtonNavigateForward = (buttonRoute: string | undefined) => {
    navigate("/" + buttonRoute);
  }

  const handleSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      contact: { value: string };
      first_name: { value: string };
      last_name: { value: string };
      address: { value: string };
      note: { value: string };
      city: { value: string };
      zipcode: { value: string };
      state: { value: string };
    };

    const contact = target.contact.value ? target.contact.value : defaultValues.contact;
    const address = target.address.value ? target.address.value : defaultValues.address;
    const first_name = target.first_name.value ? target.first_name.value : defaultValues.first_name;
    const last_name = target.last_name.value ? target.last_name.value : defaultValues.last_name;
    const note = target.note.value ? target.note.value : defaultValues.note;
    const city = target.city.value ? target.city.value : defaultValues.city;
    const zipcode = target.zipcode.value ? target.zipcode.value : defaultValues.zipcode;
    const state = target.state.value ? target.state.value : defaultValues.state;

    dispatch({ 
      type: formReducerConst.UPDATE_FORM, 
      value: {
        first_name,
        last_name,
        contact,
        note,
        city,
        zipcode,
        state,
        shipTo: address,
      }
    });

    handleButtonNavigateForward(checkoutButtons[0].forwardButtonRoute)
  }

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
          defaultValue={formState.contact}
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
            defaultValue={formState.first_name}
          />
          {/* Last name input */}
          <input 
            type="text" 
            id="last_name" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="Last Name"
            defaultValue={formState.last_name}
          />
        </div>
        {/* Address and number */}
        <input
          type="text" 
          id="address" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          placeholder="Address and number"
          defaultValue={formState.shipTo}
        />
        {/* Shipping note */}
        <input
          type="text" 
          id="note" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          placeholder="Shipping note"
          defaultValue={formState.note}
        />
        <div className="flex gap-3">
          {/* City */}
          <input
            type="text" 
            id="city" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="City"
            defaultValue={formState.city}
          />
          {/* Zip Code */}
          <input
            type="text" 
            id="zipcode" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="Zip code"
            defaultValue={formState.zipcode}
          />
        </div>
        <select 
          id="state" 
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
