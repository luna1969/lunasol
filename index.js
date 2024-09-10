const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
const { User } = require("./model/User");
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());
const config = require("./config/key");

const mongoose = require("mongoose");
mongoose
  .connect(
    // "mongodb+srv://luna:123$@luna.t5kxd.mongodb.net/?retryWrites=true&w=majority&appName=luna",
    config.mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(" M o n g o D B C o n e c t"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.post("/register", async (req, res) => {
  // 회원 가입에 필요한 정보를 가져와 데이터 베이스에 넣어줌
  /*
  몽구스 구 버전용
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      });
      }); 
  */
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ success: ture });
  } catch (err) {
    res.json({ success: false, err });
  }
});

app.listen(port, () =>
  console.log(`port: ${port} l i s t e n`)
);
