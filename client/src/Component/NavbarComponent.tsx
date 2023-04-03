import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootReducerType } from "../Redux";

const NavbarComponent = () => {
  const cartInfo = useSelector((state: RootReducerType) => state.allReducers);
  console.log("navbar고요:", cartInfo.cartNum);
  const logOut = () => {
    sessionStorage.removeItem("user_id");
    alert("로그아웃 되었습니다.");
  };
  return (
    <nav id="navbar">
      <div className="navbar_site_name">여기 사이트 이름 쓸거</div>
      <div className="navbar_category">
        <div className="navbar_left">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>|</li>
            <li>Man</li>
            <li>|</li>
            <li>Women</li>
            <li>|</li>
            <li>Brand</li>
            <li>|</li>
            <li>디퓨저</li>
          </ul>
        </div>
        <div className="navbar_right">
          <div>
            <input type="text" />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "white" }}
            />
          </div>

          <ul>
            <li>
              <Link to="/login" onClick={logOut}>
                로그아웃
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/join">회원가입</Link>
            </li>
            <li>|</li>

            <li>
              <Link to="/qna">고객센터</Link>
            </li>
            <li>|</li>

            <li>
              <Link to="/cart">장바구니</Link>
            </li>
          </ul>
          <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "white" }} />
            <div className="cart_number">{cartInfo.cartNum}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
