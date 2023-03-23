import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../Redux";
import { Dispatch } from "redux";
import { UserInfo } from "../Redux/action-creators/userActionCreators";
import axios from "axios";
const LoginForm = () => {
  // 아이디 /비번 확인할 변수
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch: Dispatch = useDispatch();
  const infofo = useSelector((state: RootReducerType) => state.allUserReducers);
  console.log("리덕스에서온 유저데이터:", infofo.userInformaion);

  interface UserInfoType {
    [key: string]: string;
  }

  let userInformation: UserInfoType = {};

  const checkLogin = (id: string, password: string) => {
    axios
      .post("http://localhost:3002/checkLogin", {
        id: id,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data[0].cnt == 1) {
          console.log("로그인댐!");
          alert("로그인됌요");
          sessionStorage.setItem("user_id", id);
          // 세션 스토리지에 id값 넣기
          submitUserInfo(id, password);
        } else {
          alert("아이디 또는 비밀번호가 맞지않습니다.");
        }
      });
  };

  //  회원가입이 되면 해당 아이디 정보를 리덕스에 넣어주자

  const submitUserInfo = (id: string, password: string) => {
    axios
      .post("http://localhost:3002/userInfo", {
        id: id,
        password: password,
      })
      .then((res) => {
        console.log(res.data[0]);
        userInformation = res.data[0];
        dispatch(UserInfo.userInformation(userInformation));
      });
  };
  return (
    <div>
      <h1>로그인창</h1>
      <div>
        <label>아이디</label>
        <input
          type="text"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <label>비번</label>
        <input
          type="text"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            checkLogin(userId, userPassword);
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
