import { ActionTypes } from "../action-types/types";
import { Actions } from "../action-types";
import { ProductType } from "../action-types";

interface initialStateType {
  cart: ProductType[];
  cartNum: number;
}

const initialState = {
  cart: [],
  cartNum: 0,
};

const cartReducer = (
  state: initialStateType = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_ADD:
      const newCart = [...state.cart, action.payload];
      state.cart.push(action.payload);

      return {
        ...state,
        cartNum: newCart.length,
      };

    case ActionTypes.PRODUCT_DELETE:
      console.log("delete가 들어왔습니다.");
      const newCart2 = state.cart.filter(
        (item) => item.name !== action.payload.name
      );
      return {
        ...state,
        cart: newCart2,
        cartNum: newCart2.length,
      };

    case ActionTypes.PRODUCT_ALL_DELETE:
      console.log("all_delete가 들어왔습니다.");
      return { ...state, cart: [], cartNum: 0 };
    default:
      return state;
  }
};

export default cartReducer;
