import { selectCurrentToken } from "@/features/auth/authSlice";
import { selectCurrentUser } from "@/features/user/userSlice";
import { useSelector } from "react-redux";

const useUserInfo = () => {
  const token = useSelector(selectCurrentToken);
  const userInfo = useSelector(selectCurrentUser);
  let isLoggedIn = false;

  if (token && userInfo) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  return { isLoggedIn, token, userInfo };
};
export default useUserInfo;
