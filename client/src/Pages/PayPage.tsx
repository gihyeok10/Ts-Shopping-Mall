import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../Redux";
const PayPage = () => {
  const productInfo = useSelector(
    (state: RootReducerType) => state.allProductReducer
  );

  console.log(productInfo);
  return <div>PayPage</div>;
};

export default PayPage;

// 디테일 페이지나 장바구니에서 결제하기를 누르면?
// 해당 데이터를 reducer에 담아서 여기서 useselector를 하면 될거같다.
