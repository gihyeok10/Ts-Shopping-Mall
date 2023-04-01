import React from "react";
import { ProductType } from "../Redux/action-types";
type PropsTypes = {
  item: ProductType;
};
const PayComponent = (props: PropsTypes) => {
  return (
    <div className="pay_box">
      주문상품
      <img src={props.item.image_url} alt="" />
      <h6>{props.item.name}</h6>
      <h6>{props.item.price}</h6>
    </div>
  );
};

export default PayComponent;
