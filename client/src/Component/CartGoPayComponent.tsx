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
    if (sessionStorage.getItem("user_id")) {
      props.item.forEach((item) => {
        dispatch(Product_pay.productPay(item, "detail", 1));
      });
      navigate("/pay");
    } else {
      alert("로그인이 필요합니다.");
    }
  };
  return (
    <div>
      <button onClick={PayGo}>결제하기</button>
    </div>
  );
};

export default CartGoPayComponent;
