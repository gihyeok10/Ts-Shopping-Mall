import React from "react";
import axios from "axios";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const JoinForm = () => {
  // select 상태 변수
  const [index, setIndex] = useState("@naver.com");
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkPhoneNum, setCheckPhoneNum] = useState(true);
  const [checkId, setCheckId] = useState(true);
  // 유효성 검사 체크 상태 변수
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSex, setUserSex] = useState("남자");
  const [userBirthDay, setUserBirthDay] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userHomePhoneNum, setUserHomePhoneNum] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [userRegion, setUserRegion] = useState("");

  // 회원가입 변수

  // 팝업창 변수
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const writeForm = (
    e: React.ChangeEvent<HTMLInputElement>,
    isWhat: string
  ) => {
    if (isWhat === "id") {
      setUserId(e.target.value);
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
  // 비밀번호 맞는지 확인.
  const matchPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === userPassword) {
      setConfirmPassword(true);
    } else {
      setConfirmPassword(false);
    }
  };

  // select
  const onSelect = (e: any) => {
    setIndex(e.target.value);
    setUserEmail(userEmail + index);
  };
  // Check 정보들

  const checkPhonenumberAble = (e: React.ChangeEvent<HTMLInputElement>) => {
    // '-' 입력 시
    var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    // 숫자만 입력시
    var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("핸드폰번호 유효성 검사 :: ", regExp.test(e.target.value));

    if (regExp.test(e.target.value) == false) {
      setCheckPhoneNum(false);
    } else {
      setCheckPhoneNum(true);
    }
  };

  //비밀번호 유효성 검사
  const checkPasswordAble = (e: React.ChangeEvent<HTMLInputElement>) => {
    //  8 ~ 10자 영문, 숫자 조합
    var regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("비밀번호 유효성 검사 :: ", regExp.test(e.target.value));
    if (regExp.test(e.target.value) == false) {
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }
  };

  const checkIdAble = () => {
    axios
      .post("http://localhost:3002/checkIdAble", {
        id: userId,
      })
      .then((res) => {
        console.log("결과값", res.data);
        if (res.data[0].cnt === 1) {
          setCheckId(false);
        } else {
          setCheckId(true);
        }
      });
  };

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
        address: userRegion + userAddress,
        birth: userBirthDay,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  // 서버에 회원가입 양식 전송하기.

  // KaKao Api

  const complete = (data: { address: string }) => {
    setUserRegion(data.address + ":");
    handleClose();
  };

  return (
    <div>
      <h1>회원가입</h1>
      <div className="join_Container">
        <form className="join_Form">
          <label>아이디</label>
          <input
            onBlur={checkIdAble}
            placeholder="아이디"
            onChange={(e) => writeForm(e, "id")}
          ></input>
          {checkId ? "아이디 사용가능" : "이미 누가 쓰고있음."}
          <label>비번</label>
          <input
            onBlur={checkPasswordAble}
            placeholder="비번"
            onChange={(e) => writeForm(e, "password")}
          ></input>
          {checkPassword ? null : "이런거 쓰지마요 "}
          <label>비번확인</label>
          <input
            placeholder="비번확인"
            onBlur={(e) => matchPassword(e)}
          ></input>
          {confirmPassword ? null : "비번 틀려요,,,"}

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

          <Button variant="primary" onClick={handleShow}>
            우편번호 검색
          </Button>
          {userRegion}
          <label>세부주소</label>
          <input
            placeholder="세부주소"
            onChange={(e) => writeForm(e, "address")}
          ></input>

          <label>일반전화</label>
          <input
            placeholder="일반전화"
            onChange={(e) => writeForm(e, "homePhone")}
          ></input>

          <label>휴대전화</label>
          <input
            onBlur={checkPhonenumberAble}
            placeholder="휴대전화"
            onChange={(e) => writeForm(e, "phoneNum")}
          ></input>
          {checkPhoneNum ? null : "틀려요"}

          <label>이메일</label>
          <input
            placeholder="이메일"
            onChange={(e) => writeForm(e, "email")}
          ></input>
          <select
            onChange={(e) => {
              onSelect(e);
            }}
          >
            <option value="@naver.com">@naver.com</option>
            <option value="@nate.com">@nate.com</option>
            <option value="@daum.net">@daum.net</option>
          </select>

          <label>
            <input
              type="radio"
              name="gender"
              value="남자"
              onChange={(e) => writeForm(e, "sex")}
            />{" "}
            남자
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="여자"
              onChange={(e) => writeForm(e, "sex")}
            />{" "}
            여자
          </label>
          <button onClick={joinSubmit}>회원가입하기</button>
        </form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DaumPostcode
              className="post_modal"
              autoClose
              onComplete={complete}
            ></DaumPostcode>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default JoinForm;
