import React from "react";
import { ProductType } from "../Redux/action-types";
type PropsTypes = {
  item: ProductType;
};

const CartComponent = (props: PropsTypes) => {
  return (
    <div className="cartList">
      <img src={props.item.image_url} className="cart_Img" />
      <li>{props.item.name}</li>
      <li>{props.item.price}</li>
    </div>
  );
};

export default CartComponent;
