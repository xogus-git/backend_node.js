import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";
import { fetchUserReviews } from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  const user = await userSignUp(bodyToUser(req.body));
  res.status(StatusCodes.OK).json({ result: user });
};

export const handleGetUserReviews = async (req, res) => {
  const { userId } = req.params;

  try {
    const reviews = await fetchUserReviews(userId);
    res.status(200).json({ result: { data: reviews } });
  } catch (error) {
    console.error("리뷰 조회 오류:", error);
    res.status(500).json({ error: "리뷰 조회 실패" });
  }
};
