import React from "react";
import { ProductType } from "../Redux/action-types";
type PropsTypes = {
  item: { pay: ProductType | undefined };
};
const PayComponent = (props: PropsTypes) => {
  return (
    <div className="pay_box">
      주문상품
      <img src={props.item.pay?.image_url} alt="" />
      <h6>{props.item.pay?.name}</h6>
      <h6>{props.item.pay?.price}</h6>
    </div>
  );
};

export default PayComponent;
