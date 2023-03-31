import React from "react";
import { ProductType } from "../Redux/action-types";
type PropsTypes = {
  item: { pay: ProductType | undefined };
};
const PayComponent = (props: PropsTypes) => {
  return (
    <div>
      {props.item.pay?.name}
      {props.item.pay?.price}
    </div>
  );
};

export default PayComponent;
