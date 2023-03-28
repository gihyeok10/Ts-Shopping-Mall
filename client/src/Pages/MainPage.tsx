import React from "react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ProductList from "../Component/ProductList";
import axios from "axios";
import BannerComponent from "../Component/BannerComponent";
import { Container, Row, Col } from "react-bootstrap";
export interface Product {
  product_id: number;
  price: string;
  name: string;
  ingredient: string;
  image_url: string;
  gneder: string;
  country: string;
  brand: string;
}
const MainPage = () => {
  // 상품정보 타입
  // 상품 정보들
  const [productInformation, setProductInformation] = useState([]);
  const getProductInformation = () => {
    axios.post("http://localhost:3002/getProduct", {}).then((res) => {
      console.log("상품정보요", res.data);
      setProductInformation(res.data);
    });
  };

  useEffect(() => {
    getProductInformation();
  }, []);

  return (
    <div>
      <BannerComponent />
      <h1>전체 상품</h1>
      <Row>
        {productInformation &&
          productInformation.map((item: Product, index: number) => {
            return (
              <Col key={index}>
                <ProductList item={item} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default MainPage;

export {};
