import React from "react";
import { ProductType } from "../Redux/action-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ProductInfo } from "../Redux/action-creators";
import { RootReducerType } from "../Redux/store";
import CartComponent from "../Component/CartComponent";
import CartGoPayComponent from "../Component/CartGoPayComponent";
const CartPage = () => {
  const dispatch: Dispatch = useDispatch();
  const cartInfo = useSelector((state: RootReducerType) => state.allReducers);
  const cartList = cartInfo ? cartInfo.cart : null;
  const cartNull = () => {
    dispatch(ProductInfo.product(ProductNull, "all_delete"));
  };
  return (
    <div>
      <button onClick={cartNull}>장바구니 비우기</button>
      {cartList &&
        cartList.map((item, index) => {
          return (
            <div key={index}>
              <CartComponent item={item} />
            </div>
          );
        })}
      <CartGoPayComponent item={cartInfo.cart} />
    </div>
  );
};

export default CartPage;

// 빈 프로덕트 오브젝트
export const ProductNull: ProductType = {
  product_id: 0,
  price: "0",
  name: "",
  ingredient: "",
  image_url: "",
  gneder: "",
  country: "",
  brand: "",
  stateNum: 0,
};
