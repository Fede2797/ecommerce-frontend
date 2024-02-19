import { formReducerConst, productReducer } from '../config/constants'

export interface SyzeType {
  size: number,
  available: boolean
}

export interface ProductType {
  _id: string,
  name: string,
  description: string,
  price: number,
  category: string,
  sizes: SyzeType[],
  imgSource: string,
}

export interface ProductUploadType {
  name: string,
  price: string,
  category: string,
  sizes: SyzeType[],
  imgSource: File,
}

export interface CartProduct {
  _id: string,
  name: string,
  price: number,
  size: number,
  imgSource: string,
  quantity: number,
}
export interface CartState {
  cart: CartProduct[];
}

export interface FormState {
  contact: string;
  first_name: string;
  last_name: string;
  city: string;
  shipTo: string;
  note: string;
  state: string;
  zipcode: string;
  method: string;
}

export interface AppState {
  cartState: CartState;
  formState: FormState;
}

interface AddProductAction {
  type: productReducer.ADD_PRODUCT;
  value: CartProduct;
}

interface RemoveProductAction {
  type: productReducer.REMOVE_PRODUCT;
  value: CartProduct;
}

interface ChangeQuantityAction {
  type: productReducer.CHANGE_QUANTITY;
  value: CartProduct;
}

interface EmptyCartAction {
  type: productReducer.EMPTY_CART;
}

interface UpdateFormAction {
  type: formReducerConst.UPDATE_FORM;
  value: Partial<FormState>;
}

interface EmptyFormAction {
  type: formReducerConst.EMPTY_FORM;
}

export type AppAction =
  | AddProductAction
  | RemoveProductAction
  | ChangeQuantityAction
  | EmptyCartAction
  | UpdateFormAction
  | EmptyFormAction;
