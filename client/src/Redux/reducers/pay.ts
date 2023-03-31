import { PayProductTypes } from "../action-types/types";
import { ProductType } from "../action-types";
import { PayProductAction } from "../action-types/payAction";

interface initialStateType {
  pay: ProductType[];
}

const initialState = {
  pay: [],
};

const payReducer = (
  state: initialStateType = initialState,
  action: PayProductAction
) => {
  switch (action.type) {
    case PayProductTypes.PRODUCT_INSERT:
      return {
        ...state,
        pay: action.payload,
      };

    default:
      return state;
  }
};

export default payReducer;
