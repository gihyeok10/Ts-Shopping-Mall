import { Dispatch } from "redux";
import { ProductType } from "../action-types";
import { PayAction } from "../action-types/payAction";
import { PayProductTypes } from "../action-types/types";

const productPay = (
  productInfo: ProductType,
  howProduct: string,
  stateNum: number
): any => {
  return async (dispatch: Dispatch<PayAction>) => {
    if (howProduct === "detail") {
      dispatch({
        type: PayProductTypes.PRODUCT_INSERT,
        payload: productInfo,
      });
    } else if (howProduct === "cart") {
      productInfo.stateNum = stateNum;

      dispatch({
        type: PayProductTypes.PRODUCT_CART_INSERT,
        payload: productInfo,
      });
    } else if (howProduct === "delete") {
      dispatch({
        type: PayProductTypes.PRODUCT_PAY_DELETE,
        payload: productInfo,
      });
    }
  };
};

export const Product_pay = {
  productPay,
};
