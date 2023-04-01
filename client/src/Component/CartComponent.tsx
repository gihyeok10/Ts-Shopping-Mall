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
      <li>수량:{props.item.stateNum}개</li>
      <button
        onClick={() => {
          dispatch(ProductInfo.product(props.item, "num_plus"));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(ProductInfo.product(props.item, "num_minus"));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(ProductInfo.product(props.item, "delete"));
        }}
      >
        삭제
      </button>
      <button>결제하기</button>
    </div>
  );
};

export default CartComponent;

// 장바구니에 결제하기 버튼을 누르면, 결제 하기 창으로 이동 & 해당 장바구니 상품들을 productpay에 dispath한다.
