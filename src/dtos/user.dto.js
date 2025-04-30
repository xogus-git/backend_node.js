export const bodyToUser = (body) => {
  const birth = new Date(body.birth);

  return {
    email: body.email,
    name: body.name,
    gender: body.gender,
    birth,
    address: body.address || "",
    detailAddress: body.detailAddress || "",
    phoneNumber: body.phoneNumber,
    preferences: body.preferences,
  };
};

export const responseFromUser = ({ user, preferences }) => {
  const u = user[0]; // user는 배열이므로 첫 번째 요소를 꺼내야 함

  return {
    id: u.id,
    email: u.email,
    name: u.name,
    gender: u.gender,
    birth: u.birth,
    address: u.address,
    detailAddress: u.detailAddress,
    phoneNumber: u.phoneNumber,
    preferences: preferences.map((p) => ({
      id: p.food_category_id,
      name: p.name,
    })),
  };
};
