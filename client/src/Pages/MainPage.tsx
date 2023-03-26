import React from "react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ProductList from "../Component/ProductList";
import axios from "axios";

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

  const navigate = useNavigate();
  const navigateMove = (): void => {
    navigate("/detail");
  };
  return (
    <div>
      <button onClick={getProductInformation}>정보go</button>
      <button onClick={navigateMove}>Go Detail</button>

      {productInformation &&
        productInformation.map((item: Product, index: number) => {
          return (
            <div key={index}>
              <ProductList item={item} />;
            </div>
          );
        })}
    </div>
  );
};

export default MainPage;

export {};
