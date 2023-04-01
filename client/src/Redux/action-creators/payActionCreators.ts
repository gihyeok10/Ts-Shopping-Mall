import { Dispatch } from "redux";
import { ProductType } from "../action-types";
import { PayProductAction } from "../action-types/payAction";
import { PayProductTypes } from "../action-types/types";

const productPay = (productInfo: ProductType, howProduct: string): any => {
  return async (dispatch: Dispatch<PayProductAction>) => {
    if (howProduct === "detail") {
      dispatch({
        type: PayProductTypes.PRODUCT_INSERT,
        payload: productInfo,
      });
    } else if (howProduct === "cart") {
    }
  };
};

export const Product_pay = {
  productPay,
};
