import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const LoginForm = () => {
  // 아이디 /비번 확인할 변수
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

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
        } else {
          alert("아이디 또는 비밀번호가 맞지않습니다.");
        }
      });
  };

  return (
    <div>
      <h1>로그인창</h1>
      <div>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
