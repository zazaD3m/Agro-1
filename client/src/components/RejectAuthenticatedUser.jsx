import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectCurrentToken } from "@/features/auth/authSlice";
import { selectCurrentUser } from "@/features/user/userSlice";

const RejectAuthenticatedUser = () => {
  const token = useSelector(selectCurrentToken);
  const userInfo = useSelector(selectCurrentUser);

  if (token && userInfo) {
    return <Navigate replace to="/" />;
  } else {
    return <Outlet />;
  }
};
export default RejectAuthenticatedUser;
