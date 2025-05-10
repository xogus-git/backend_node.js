// src/scripts/seed.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "홍길동",
      gender: "남성",
      birth: new Date("1990-01-01"),
      address: "서울특별시",
      phoneNumber: "010-1234-5678",
    },
  });

  const store = await prisma.store.create({
    data: {
      regionId: 1,
      name: "맛집",
      address: "서울 강남구",
      score: 5,
    },
  });

  const review = await prisma.review.create({
    data: {
      body: "아주 훌륭했어요!",
      userId: user.id,
      storeId: store.id,
    },
  });

  console.log("더미 리뷰 등록 완료:", review);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
