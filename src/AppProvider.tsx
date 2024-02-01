import { createContext, useContext, useReducer, ReactNode } from 'react';
import { productReducer } from './config/constants';
import { CartProduct } from './types/AppTypes';
import { addItemToCart, changeItemQuantity, removeItemFromCart } from './helpers/providerHelper';

const AppContext = createContext<null | any>(null);

const useAppContext = () => useContext(AppContext);

const initialState: CartProduct[]  = [];

const reducer = (state: CartProduct[], action: {type: string, value: CartProduct}) => {
  switch (action.type) {
    case productReducer.ADD_PRODUCT:
      return addItemToCart(action.value, state);
    case productReducer.REMOVE_PRODUCT:
      return removeItemFromCart(action.value, state);
    case productReducer.CHANGE_QUANTITY:
      return changeItemQuantity(action.value, state);
  }
  return state;
}

const AppProvider = ({ children }: { children: ReactNode }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      { children }
    </AppContext.Provider>
  )
}

export {
  AppProvider,
  useAppContext
}