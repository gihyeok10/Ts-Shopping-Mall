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
      // 만약 action.payload.name === state.cart안에 한개라도 있다면? 그 네임을 가지고 있는 객체 statenum에 1을 추가해준다.
      const newCart = [...state.cart];

      const existingProduct = newCart.find(
        (item) => item.name === action.payload.name
      );

      if (existingProduct) {
        newCart.forEach((item) => {
          if (item.name === existingProduct.name) {
            item.stateNum += 1;
          }
        });
      } else {
        newCart.push(action.payload);
      }

      return {
        ...state,
        cart: newCart,
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
