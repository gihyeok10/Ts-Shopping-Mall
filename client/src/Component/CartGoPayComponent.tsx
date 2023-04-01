import React from "react";
import { useNavigate } from "react-router";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ProductType } from "../Redux/action-types";
type PropsTypes = {
  item: ProductType[];
};
const CartGoPayComponent = (props: PropsTypes) => {
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("전달된 프롭스:", props.item);
  return (
    <div>
      <button>결제하기</button>
    </div>
  );
};

export default CartGoPayComponent;
