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
      <div>
        <img
          src={props.item.image_url && props.item.image_url}
          className="cart_Img"
        />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(ProductInfo.product(props.item, "delete"));
          }}
          className="deleteBtn"
        >
          X
        </button>
        <h5>{props.item.name && props.item.name}</h5>
        <p style={{ color: "#ccc" }}>배송 : [무료] / 기본배송</p>
        <p style={{ fontWeight: "bold" }}>
          {props.item.price && props.item.price}원
        </p>
        <div className="MathBtn">
          <p style={{ fontWeight: "bold" }}>수량:{props.item.stateNum}개</p>
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
        </div>
      </div>
    </div>
  );
};

export default CartComponent;

// 장바구니에 결제하기 버튼을 누르면, 결제 하기 창으로 이동 & 해당 장바구니 상품들을 productpay에 dispath한다.
