import React from "react";
import axios from "axios";
import { useState } from "react";
const JoinForm = () => {
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPhoneNum, setCheckPhoneNum] = useState(true);
  const [checkId, setCheckId] = useState(true);
  // 유효성 검사 체크 상태 변수

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSex, setUserSex] = useState("");
  const [userBirthDay, setUserBirthDay] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userHomePhoneNum, setUserHomePhoneNum] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  // 회원가입 변수

  const writeForm = (
    e: React.ChangeEvent<HTMLInputElement>,
    isWhat: string
  ) => {
    if (isWhat === "id") {
      setUserId(e.target.value);
      console.log("id값이요", userId);
    } else if (isWhat === "password") {
      setUserPassword(e.target.value);
    } else if (isWhat === "name") {
      setUserName(e.target.value);
    } else if (isWhat === "phoneNum") {
      setUserPhoneNum(e.target.value);
    } else if (isWhat === "email") {
      setUserEmail(e.target.value);
    } else if (isWhat === "sex") {
      setUserSex(e.target.value);
    } else if (isWhat === "birth") {
      setUserBirthDay(e.target.value);
    } else if (isWhat === "address") {
      setUserAddress(e.target.value);
    } else if (isWhat === "homePhone") {
      setUserHomePhoneNum(e.target.value);
    }
  };
  // onchange

  const joinSubmit = () => {
    axios
      .post("http://localhost:3002/joinSubmit", {
        id: userId,
        name: userName,
        password: userPassword,
        phoneNum: userPhoneNum,
        homePhoneNum: userHomePhoneNum,
        sex: userSex,
        email: userEmail,
        address: userAddress,
        birth: userBirthDay,
      })
      .then((res) => {
        console.log("성공!");
        console.log(res.data);
      });
  };
  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <form>
          <label>아이디</label>
          <input
            placeholder="아이디"
            onChange={(e) => writeForm(e, "id")}
          ></input>

          <label>비번</label>
          <input
            placeholder="비번"
            onChange={(e) => writeForm(e, "password")}
          ></input>

          <label>비번확인</label>
          <input
            placeholder="비번확인"
            onChange={(e) => writeForm(e, "password")}
          ></input>

          <label>이름</label>
          <input
            placeholder="이름"
            onChange={(e) => writeForm(e, "name")}
          ></input>

          <label>생년월일</label>
          <input
            placeholder="생년월일"
            onChange={(e) => writeForm(e, "birth")}
          ></input>

          <label>우편번호</label>
          <input
            placeholder="우편번호"
            onChange={(e) => writeForm(e, "address")}
          ></input>

          <label>성별</label>
          <input
            placeholder="성별"
            onChange={(e) => writeForm(e, "sex")}
          ></input>

          <label>일반전화</label>
          <input
            placeholder="일반전화"
            onChange={(e) => writeForm(e, "homePhone")}
          ></input>

          <label>휴대전화</label>
          <input
            placeholder="휴대전화"
            onChange={(e) => writeForm(e, "phoneNum")}
          ></input>

          <label>이메일</label>
          <input
            placeholder="이메일"
            onChange={(e) => writeForm(e, "email")}
          ></input>

          <button onClick={joinSubmit}>회원가입하기</button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
