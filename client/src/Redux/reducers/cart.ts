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
      state.cart.map((item, index) => {
        if (item.name === action.payload.name) {
          delete state.cart[index];
          return;
        }
      });
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cartReducer;
