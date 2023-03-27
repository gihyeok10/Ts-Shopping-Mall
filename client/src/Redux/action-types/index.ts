import { ActionTypes } from "./types";

export interface ProductType {
  product_id: number;
  price: string;
  name: string;
  ingredient: string;
  image_url: string;
  gneder: string;
  country: string;
  brand: string;
  stateNum: number;
}

interface ProductAddAction {
  type: ActionTypes.PRODUCT_ADD;
  payload: ProductType;
}

interface ProductDeleteAction {
  type: ActionTypes.PRODUCT_DELETE;
  payload: ProductType;
}

interface ProductAllDeleteAction {
  type: ActionTypes.PRODUCT_ALL_DELETE;
  payload: ProductType;
}

interface ProductNumPlusAction {
  type: ActionTypes.PRODUCT_NUM_PLUS;
  payload: ProductType;
}

interface ProductNumMinusAction {
  type: ActionTypes.PRODUCT_NUM_MINUS;
  payload: ProductType;
}

export type Actions =
  | ProductAddAction
  | ProductDeleteAction
  | ProductAllDeleteAction
  | ProductNumPlusAction
  | ProductNumMinusAction;

export {};
