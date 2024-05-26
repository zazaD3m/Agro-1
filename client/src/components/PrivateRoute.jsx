import useUserInfo from "@/hooks/useUserInfo";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLoggedIn } = useUserInfo();

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate replace to="/auth/login" />;
  }
};
export default PrivateRoute;
