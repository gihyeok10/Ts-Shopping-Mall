import { Dispatch } from "redux";
import { ProductType } from "../action-types";
import { PayProductAction } from "../action-types/payAction";
import { PayProductTypes } from "../action-types/types";
const productPay = (productInfo: ProductType): any => {
  return async (dispatch: Dispatch<PayProductAction>) => {
    dispatch({
      type: PayProductTypes.PRODUCT_INSERT,
      payload: productInfo,
    });
  };
};

export const Product_pay = {
  productPay,
};

export {};
