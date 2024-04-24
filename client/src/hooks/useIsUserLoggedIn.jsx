import { selectCurrentToken } from "@/features/auth/authSlice";
import { selectCurrentUser } from "@/features/user/userSlice";
import { useSelector } from "react-redux";

const useIsUserLoggedIn = () => {
  const token = useSelector(selectCurrentToken);
  const userInfo = useSelector(selectCurrentUser);
  if (token && userInfo) {
    return true;
  } else {
    return false;
  }
};
export default useIsUserLoggedIn;
