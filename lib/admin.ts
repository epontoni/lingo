import { auth } from "@clerk/nextjs";

const adminsIds = [
  "user_2f3d2GBagXbyak3FdGvsg2mQiJf",
  "user_2f3d2GBagXbyak3FdGvsg2mQiJf",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  if (!adminsIds.includes(userId)) {
    return false;
  } else {
    return true;
  }
};
