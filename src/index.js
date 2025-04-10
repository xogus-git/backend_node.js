import express from "express";

const app = express();
const port = 4000;

app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.post("/login", (req, res) => {
  console.log(req.body);
  const { userId, password } = req.body;
  console.log(userId);
  console.log(password);

  res.send("로그인 페이지 입니다.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); //테스트
});
