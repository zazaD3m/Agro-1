import { Navigate, Outlet } from "react-router-dom";

import useUserInfo from "@/hooks/useUserInfo";

const RejectAuthenticatedUser = () => {
  const { isLoggedIn } = useUserInfo();

  if (isLoggedIn) {
    return <Navigate replace to="/" />;
  } else {
    return <Outlet />;
  }
};
export default RejectAuthenticatedUser;
