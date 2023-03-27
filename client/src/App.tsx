import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ProductInfo } from "./Redux/action-creators";
import { useNavigate } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import CartPage from "./Pages/CartPage";
import JoinPage from "./Pages/JoinPage";
import LoginPage from "./Pages/LoginPage";
import Mypage from "./Pages/Mypage";
import PayPage from "./Pages/PayPage";
import QnaPage from "./Pages/QnaPage";
import SearchPage from "./Pages/SearchPage";
import MainPage from "./Pages/MainPage";
import { RootReducerType } from "./Redux";

import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const data2 = useSelector((state: RootReducerType) => state.allReducers);
  console.log("js의 데이타 입니다..!", data2);

  return (
    <div className="App">
      <button onClick={() => navigate("/cart")}>장바구니</button>
      <button onClick={() => navigate("/join")}>회원가입</button>
      <button onClick={() => navigate("/login")}>로그인</button>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myInfo" element={<Mypage />} />
        <Route path="/pay" element={<PayPage />} />
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
