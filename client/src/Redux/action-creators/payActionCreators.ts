import { Dispatch } from "redux";
import { ProductType } from "../action-types";
import { PayAction } from "../action-types/payAction";
import { PayProductTypes } from "../action-types/types";

const productPay = (productInfo: ProductType, howProduct: string): any => {
  return async (dispatch: Dispatch<PayAction>) => {
    if (howProduct === "detail") {
      dispatch({
        type: PayProductTypes.PRODUCT_INSERT,
        payload: productInfo,
      });
    } else if (howProduct === "cart") {
      dispatch({
        type: PayProductTypes.PRODUCT_CART_INSERT,
        payload: productInfo,
      });
    }
  };
};

export const Product_pay = {
  productPay,
};
