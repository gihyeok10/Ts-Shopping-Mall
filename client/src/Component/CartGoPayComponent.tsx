import React from "react";
import { useNavigate } from "react-router";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ProductType } from "../Redux/action-types";
import { Product_pay } from "../Redux/action-creators/payActionCreators";
import { payActionCreators } from "../Redux";
type PropsTypes = {
  item: ProductType[];
};
const CartGoPayComponent = (props: PropsTypes) => {
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();

  const PayGo = () => {
    props.item.forEach((item) => {
      dispatch(Product_pay.productPay(item, "detail", 1));
    });
    navigate("/pay");
  };
  console.log("전달된 프롭스:", props.item);
  return (
    <div>
      <button onClick={PayGo}>결제하기</button>
    </div>
  );
};

export default CartGoPayComponent;
