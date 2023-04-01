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

export type PayAction = PayProductAction | PayProductCartAction;
