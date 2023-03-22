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
    "INSERT INTO user_Information (user_Id,user_name,user_password,user_phoneNum,user_homePhoneNum,user_email,user_sex,user_address,user_birthday) VALUES (?,?,?,?,?,?,?,?,?)",
    [id, name, password, phoneNum, homePhoneNum, sex, email, address, birth],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Success");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log("서버 돌리는중..");
});
