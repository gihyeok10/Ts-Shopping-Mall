import { PayProductTypes } from "./types";
import { ProductType } from ".";

export interface PayProductAction {
  type: PayProductTypes.PRODUCT_INSERT;
  payload: ProductType;
}

export interface PayProductCartAction {
  type: PayProductTypes.PRODUCT_CART_INSERT;
  payload: ProductType;
}

interface PayProductZero {
  type: PayProductTypes.PRODUCT_PAY;
  payload: ProductType;
}

interface PayProductDelete {
  type: PayProductTypes.PRODUCT_PAY_DELETE;
  payload: ProductType;
}

export type PayAction =
  | PayProductAction
  | PayProductCartAction
  | PayProductZero
  | PayProductDelete;
