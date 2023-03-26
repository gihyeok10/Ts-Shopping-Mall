import axios from "axios";
import { useDispatch } from "react-redux";
import { ProductInfo } from "../Redux/action-creators";
import { Dispatch } from "redux";
import { useState, useEffect } from "react";
import { ProductType } from "../Redux/action-types";
type PropsType = {
  id: string | undefined;
};

export const DetailComponent = (props: PropsType) => {
  const dispatch: Dispatch = useDispatch();

  let data = props.id;
  let Product_Id: number | undefined;

  const [DetailProduct, setDetailProduct] = useState<ProductType>();

  useEffect(() => {
    getDetailProduct();
  }, []);

  if (typeof data === "string") {
    Product_Id = parseInt(data);
  }

  const getDetailProduct = () => {
    try {
      axios
        .post("http://localhost:3002/getDetailProduct", { id: Product_Id })
        .then((res) => {
          console.log("상품의 디테일데이타:", res.data[0]);
          setDetailProduct(res.data[0]);
        });
    } catch (e) {
      console.log("에러요:", e);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          if (DetailProduct) {
            dispatch(ProductInfo.product(DetailProduct, true));
          }
        }}
      >
        장바구니 담기
      </button>
    </div>
  );
};

// axios로 id가 ? 인 정보를 달라 이런식으로 하면 될듯?? 해서 그 정보 렌더링 ㄱㄱ
