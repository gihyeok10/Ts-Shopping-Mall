import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../Redux";
import { Container } from "react-bootstrap";
import PayComponent from "../Component/PayComponent";
import { ProductType } from "../Redux/action-types";
interface productInfo {
  pay: ProductType[];
}

const PayPage = () => {
  const productInfo: productInfo = useSelector(
    (state: RootReducerType) => state.allProductReducer
  );

  console.log("넘어온데이터:", productInfo.pay);

  return (
    <Container>
      <h1>주문내역확인</h1>
      {productInfo.pay.map((v, index) => {
        return (
          <div key={index}>
            <PayComponent item={v} />;
          </div>
        );
      })}
      {/* <PayComponent item={productInfo} /> */}
    </Container>
  );
};

export default PayPage;

// 디테일 페이지나 장바구니에서 결제하기를 누르면?
// 해당 데이터를 reducer에 담아서 여기서 useselector를 하면 될거같다.
