import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../Redux";
import { Dispatch } from "redux";
import { UserInfo } from "../Redux/action-creators/userActionCreators";
import { Container } from "react-bootstrap";
import axios from "axios";
const LoginForm = () => {
  const navigate = useNavigate();
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
          document.location.href = "/";
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
    <Container className="LoginContainer">
      <div>
        <h4>회원 로그인</h4>
        <p>
          가입하신 아이디와 비밀번호를 입력해주세요.<br></br>비밀번호는
          대소문자를 구분합니다.
        </p>

        <input
          style={{ marginTop: "1em" }}
          type="text"
          placeholder="아이디"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <input
          style={{ marginTop: "0.3em" }}
          className="input1"
          type="text"
          placeholder="비밀번호"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <div
          className="loginBtn"
          onClick={() => {
            checkLogin(userId, userPassword);
          }}
        >
          로그인
        </div>
      </div>
      <div>
        <h4>회원가입</h4>
        <p>
          아직 회원이 아니신가요?<br></br>
          회원가입을 하시면 다양한 혜택을 편리하게 이용하실 수 있습니다.
        </p>
        <div
          className="joinBtn"
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입
        </div>
        <p>
          비회원 구매를 원하세요?<br></br>
          아래버튼으로 연결 후 비회원 구매가 가능합니다.
        </p>
        <div
          className="joinBtn"
          onClick={() => alert("비회원구매는 아직 불가능합니다.")}
        >
          비회원구매
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
