import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react'
import { formReducerConst, productReducer } from './config/constants'
import { AppAction, AppState, CartState, FormState } from './types/AppTypes'
import { addItemToCart, changeItemQuantity, removeItemFromCart } from './helpers/providerHelper'

const AppContext = createContext<{ state: AppState; dispatch: Dispatch<AppAction> } | null>(null)

const useAppContext = () => useContext(AppContext)

const initialCartState: CartState = {
  cart: []
}

const cartReducer = (state: CartState, action: AppAction) => {
  switch (action.type) {
    case productReducer.ADD_PRODUCT:
      return { ...state, cart: addItemToCart(action.value, state.cart) }
    case productReducer.REMOVE_PRODUCT:
      return { ...state, cart: removeItemFromCart(action.value, state.cart) }
    case productReducer.CHANGE_QUANTITY:
      return { ...state, cart: changeItemQuantity(action.value, state.cart) }
    case productReducer.EMPTY_CART:
      return { ...state, cart: [] }
  }
  return state
}

const initialFormState: FormState = { contact: '', first_name: '', last_name: '', city: '', shipTo: '', note: '', state: '', zipcode: '', method: '' }

const formReducer = (state: FormState, action: AppAction) => {
  switch (action.type) {
    case formReducerConst.UPDATE_FORM:
      return { ...state, ...action.value }
    case formReducerConst.EMPTY_FORM:
      return { ...initialFormState }
  }
  return state
}

const initialState: AppState = {
  cartState: initialCartState,
  formState: initialFormState
}

const rootReducer = (state: AppState, action: AppAction) => {
  return {
    cartState: cartReducer(state.cartState, action),
    formState: formReducer(state.formState, action)
  }
}

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      { children }
    </AppContext.Provider>
  )
}

export {
  AppProvider,
  useAppContext
}
