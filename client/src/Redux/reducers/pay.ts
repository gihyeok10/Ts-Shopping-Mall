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
      return {
        ...state,
        pay: action.payload,
      };
    default:
      return state;
  }
};

export default payReducer;
