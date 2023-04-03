import React from "react";
import { ProductType } from "../Redux/action-types";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { Product_pay } from "../Redux/action-creators/payActionCreators";
type PropsTypes = {
  item: ProductType;
};
const PayComponent = (props: PropsTypes) => {
  const dispatch: Dispatch = useDispatch();
  return (
    <div className="pay_box">
      <div>주문상품</div>
      <div>
        <img src={props.item.image_url} alt="" />
        <div className="infoBox">
          <h6>{props.item.name}</h6>
          <h6>수량: {props.item.stateNum}개</h6>
          <h6>{props.item.price}원</h6>
          <button
            onClick={() => {
              dispatch(Product_pay.productPay(props.item, "delete", 1));
            }}
          >
            X
          </button>
        </div>
      </div>
      <div className="bna">
        <h4>배송비: 0(무료)원</h4>
      </div>
    </div>
  );
};

export default PayComponent;
