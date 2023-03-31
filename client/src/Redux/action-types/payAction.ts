import { PayProductTypes } from "./types";
import { ProductType } from ".";

export interface PayProductAction {
  type: PayProductTypes.PRODUCT_INSERT;
  payload: ProductType;
}
