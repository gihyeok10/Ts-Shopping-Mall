import axios from "axios";
import { useDispatch } from "react-redux";
import { ProductInfo } from "../Redux/action-creators";
import { Dispatch } from "redux";
import { useState, useEffect } from "react";
import { ProductType } from "../Redux/action-types";
import { Col, Container, Row } from "react-bootstrap";
type PropsType = {
  id: string | undefined;
};

export const DetailComponent = (props: PropsType) => {
  const dispatch: Dispatch = useDispatch();
  const [product_number, setProduct_number] = useState(1);
  // number가 -1이 되는걸 방지

  if (product_number <= -1) {
    setProduct_number(0);
  }
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
    <Container style={{ border: "1px solid" }}>
      <Row>
        <Col lg={5}>
          <div style={{ height: 650, width: 560 }}>
            {DetailProduct && (
              <img
                src={DetailProduct.image_url}
                alt=""
                style={{ width: 600, height: 650 }}
              />
            )}
          </div>
        </Col>

        <Col lg={5} style={{ border: "1px solid", marginLeft: 210 }}>
          {DetailProduct && (
            <div>
              <h1>{DetailProduct.name}</h1>
              <p>{DetailProduct.brand}</p>
              <p>{DetailProduct.gneder}</p>
              <p>{DetailProduct.price}</p>
              <p>{DetailProduct.country}</p>
              <p>{DetailProduct.brand}</p>
              <div>
                <p>현재 수량</p>
                <button onClick={() => setProduct_number(product_number + 1)}>
                  +
                </button>
                <p>{product_number}</p>
                <button onClick={() => setProduct_number(product_number - 1)}>
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    if (DetailProduct) {
                      dispatch(ProductInfo.product(DetailProduct, "add"));
                    }
                  }}
                >
                  장바구니 담기
                </button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

// axios로 id가 ? 인 정보를 달라 이런식으로 하면 될듯?? 해서 그 정보 렌더링 ㄱㄱ
{
  /* <button
        onClick={() => {
          if (DetailProduct) {
            dispatch(ProductInfo.product(DetailProduct, "add"));
          }
        }}
      >
        장바구니 담기
      </button> */
}
