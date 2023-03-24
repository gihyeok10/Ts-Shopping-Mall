import React from "react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
const MainPage = () => {
  // 상품정보 타입
  // 상품 정보들
  let productInformation = {};
  console.log("메인피이지");
  const getProductInformation = () => {
    axios.get("http://localhost:3002/getProduct", {}).then((res) => {
      console.log("상품정보요", res.data);
      productInformation = res.data;
    });
  };

  const navigate = useNavigate();
  const navigateMove = (): void => {
    navigate("/detail");
  };
  return (
    <div>
      <button onClick={getProductInformation}>정보go</button>
      <button onClick={navigateMove}>Go Detail</button>
    </div>
  );
};

export default MainPage;

export {};
