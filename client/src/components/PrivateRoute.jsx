import useUserInfo from "@/hooks/useUserInfo";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLoggedIn } = useUserInfo();

  console.log(isLoggedIn);

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate replace to="/" />;
  }
};
export default PrivateRoute;
