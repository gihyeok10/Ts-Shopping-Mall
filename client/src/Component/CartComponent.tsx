import React from "react";
import { ProductType } from "../Redux/action-types";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ProductInfo } from "../Redux/action-creators";
type PropsTypes = {
  item: ProductType;
};

const CartComponent = (props: PropsTypes) => {
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="cartList">
      <img
        src={props.item.image_url && props.item.image_url}
        className="cart_Img"
      />
      <li>{props.item.name && props.item.name}</li>
      <li>{props.item.price && props.item.price}</li>
      <button
        onClick={() => {
          dispatch(ProductInfo.product(props.item, "delete"));
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default CartComponent;
