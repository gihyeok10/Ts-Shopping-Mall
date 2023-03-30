import axios from "axios";
import { useDispatch } from "react-redux";
import { ProductInfo } from "../Redux/action-creators";
import { Dispatch } from "redux";
import { useState, useEffect } from "react";
import { ProductType } from "../Redux/action-types";
import { Col, Container, Row } from "react-bootstrap";
import DetailProductInfo from "./DetailProductInfo";
import Button from "react-bootstrap/Button";

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

  const puls_minus_Btn = (w: string) => {
    if (w === "plus") {
      setProduct_number(product_number + 1);
    } else {
      setProduct_number(product_number - 1);
    }
  };

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
    <Container>
      <Row>
        <Col lg={4}>
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

        <Col lg={6} style={{ marginLeft: 200, marginTop: 20 }}>
          {DetailProduct && (
            <div>
              <div>
                <br />
                <br />
                <h2>{DetailProduct.name}</h2>
              </div>
              <hr></hr>

              <div className="detail_product">
                <div>
                  <p>제품 브랜드</p>
                </div>
                <div>
                  <p>{DetailProduct.brand}</p>
                </div>
              </div>

              <div className="detail_product">
                <div>
                  <p>성별</p>
                </div>
                <div>
                  <p>{DetailProduct.gneder}용</p>
                </div>
              </div>

              <div className="detail_product">
                <div>
                  <p style={{ color: "gray" }}> 소비자가</p>
                </div>
                <div>
                  <p style={{ color: "gray", textDecoration: "line-through" }}>
                    {DetailProduct.price}원
                  </p>
                </div>
              </div>

              <div className="detail_product">
                <div>
                  <p style={{ fontSize: 20, fontWeight: "bold" }}> 할인가</p>
                </div>
                <div>
                  <p style={{ fontSize: 20, fontWeight: "bold" }}>
                    {DetailProduct.price}원
                  </p>
                </div>
              </div>

              <div className="detail_product">
                <div>
                  <p>배송방법</p>
                </div>
                <div>
                  <p>택배</p>
                </div>
              </div>

              <div className="detail_product">
                <div>
                  <p>배송비</p>
                </div>
                <div>
                  <p>7000원 (130,000원 이상 구매 시 무료)</p>
                </div>
              </div>

              <div className="detail_product">
                <div>
                  <p>적립금</p>
                </div>
                <div>
                  <p>800원</p>
                </div>
              </div>

              <div className="detail_product">
                <div>
                  <p>수량</p>
                </div>
                <div className="counterBox">
                  <Button onClick={() => puls_minus_Btn("plus")}>+</Button>
                  <input
                    type="text"
                    value={product_number}
                    onChange={(e) => {
                      setProduct_number(parseInt(e.target.value));
                    }}
                  />
                  <Button onClick={() => puls_minus_Btn("minus")}>-</Button>
                </div>
              </div>
              <hr></hr>
              <div className="newb">
                <p>
                  신규회원을위한 5000원 쿠폰지급 (~12.31까지 / 5만원 이상
                  구매시)
                </p>
              </div>
              <div className="gun">
                <p style={{ color: "red", fontSize: 13 }}>
                  [관부가세 미포함] 관부가세 면제기준 : 미화 150달러 이하,
                  향수의 경우 60ml 이하
                </p>
              </div>

              <div>
                <div className="check">
                  <h2> {DetailProduct.price}</h2>
                  <p>({product_number})개</p>
                </div>

                <div className="paygo">
                  <div
                    onClick={() => {
                      if (DetailProduct) {
                        dispatch(ProductInfo.product(DetailProduct, "add"));
                      }
                    }}
                  >
                    장바구니
                  </div>
                  <div>구매하기</div>
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
      <DetailProductInfo item={DetailProduct} />
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
