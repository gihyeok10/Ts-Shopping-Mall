import { PayProductTypes } from "../action-types/types";
import { ProductType } from "../action-types";
import { PayAction } from "../action-types/payAction";
interface initialStateType {
  pay: ProductType[];
}

const initialState = {
  pay: [],
};

const payReducer = (
  state: initialStateType = initialState,
  action: PayAction
) => {
  switch (action.type) {
    case PayProductTypes.PRODUCT_INSERT:
      state.pay.push(action.payload);
      return {
        ...state,
      };

    case PayProductTypes.PRODUCT_CART_INSERT:
      // if (state.pay.length >= 0) {
      //   for (let i = 0; i < state.pay.length; i++) {
      //     console.log("없어지는아이템:", state.pay[i]);
      //     state.pay.pop();
      //   }
      // }
      const newpay = [];
      newpay.push(action.payload);
      return {
        ...state,
        pay: newpay,
      };
    default:
      return state;
  }
};

export default payReducer;
