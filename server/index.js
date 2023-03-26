const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3002;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "zxcv123",
  database: "ShoppingMal",
});

app.post("/joinSubmit", (req, res) => {
  const {
    id,
    password,
    name,
    phoneNum,
    homePhoneNum,
    sex,
    email,
    address,
    birth,
  } = req.body;
  db.query(
    "INSERT INTO user_Information (user_Id,user_password,user_name,user_phoneNum,user_homePhoneNum,user_address,user_sex,user_birthday,user_email) VALUES (?,?,?,?,?,?,?,?,?)",
    [id, password, name, phoneNum, homePhoneNum, address, sex, birth, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Success");
      }
    }
  );
});

app.post("/checkIdAble", (req, res) => {
  const { id } = req.body;
  db.query(
    "select count(*) as 'cnt' from user_information where user_id =?;",
    [id],
    (err, result) => {
      res.send(result);
    }
  );
});

// 로그인 체크
app.post("/checkLogin", (req, res) => {
  const { id, password } = req.body;
  db.query(
    "select count(*) as 'cnt' from user_information where user_id =? and user_password = ?;",
    [id, password],
    (err, result) => {
      res.send(result);
    }
  );
});

// 회원정보 담기
app.post("/userInfo", (req, res) => {
  const { id, password } = req.body;
  db.query(
    "SELECT* from user_information WHERE user_id =? and user_password =?;",
    [id, password],
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/getProduct", (req, res) => {
  db.query("select * from product;", (err, result) => {
    console.log("리절트:", result);
    console.log("오류:", err);
    res.send(result);
  });
});
app.listen(PORT, () => {
  console.log("서버 돌리는중..");
});
