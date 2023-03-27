import React from "react";
import { ProductType } from "../Redux/action-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ProductInfo } from "../Redux/action-creators";
import { RootReducerType } from "../Redux/store";

const CartPage = () => {
  const dispatch: Dispatch = useDispatch();
  const cartInfo = useSelector((state: RootReducerType) => state.allReducers);

  const cartNull = () => {
    dispatch(ProductInfo.product(ProductNull, "all_delete"));
  };
  return (
    <div>
      <button onClick={cartNull}>장바구니 비우기</button>
    </div>
  );
};

export default CartPage;

export const ProductNull: ProductType = {
  product_id: 0,
  price: "0",
  name: "",
  ingredient: "",
  image_url: "",
  gneder: "",
  country: "",
  brand: "",
};
