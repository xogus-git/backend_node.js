import express from "express";
import dotenv from "dotenv";

import { handleUserSignUp } from "./controllers/user.controllers.js";
import { handleGetUserReviews } from "./controllers/user.controllers.js";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

//app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.post("/login", (req, res) => {
  console.log(req.body);
  const { userId, password } = req.body;
  console.log(userId);
  console.log(password);

  res.send("로그인 페이지 입니다.");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/v1/users/signup", handleUserSignUp);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); //테스트
});

app.get("/api/v1/users/:userId/reviews", handleGetUserReviews);
