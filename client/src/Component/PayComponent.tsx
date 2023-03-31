import React from "react";
import { ProductType } from "../Redux/action-types";
import { Product } from "../Pages/MainPage";
type PropsTypes = {
  item: { item: ProductType | undefined };
};
const PayComponent = (props: PropsTypes) => {
  console.log("props는?", props.item.item?.price);
  return <div>PayComponent</div>;
};

export default PayComponent;
