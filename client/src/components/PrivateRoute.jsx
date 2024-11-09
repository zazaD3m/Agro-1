import { useGetMeQuery } from "@/features/user/userApiSlice";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isSuccess, isError, isLoading } = useGetMeQuery();

  if (isSuccess) {
    return <Outlet />;
  }
  if (isLoading) {
    return <div className="h-[1000px] w-full bg-accent-dark" />;
  }
  if (isError) {
    return <Navigate to="/auth/login" replace />;
  }
};
export default PrivateRoute;
