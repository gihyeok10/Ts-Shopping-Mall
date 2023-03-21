const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3001;
const cors =require('cors')



app.listen(PORT, () => {
    console.log("서버 돌리는중..");
  });
  