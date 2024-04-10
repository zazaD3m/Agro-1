import { Link, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "@/features/auth/authSlice";
import { selectCurrentUser } from "@/features/user/userSlice";

const AuthLayout = () => {
  const token = useSelector(selectCurrentToken);
  const userInfo = useSelector(selectCurrentUser);

  if (token && userInfo) return <Navigate to="/" />;

  return (
    <main className="flex  px-4 py-12 lg:gap-12 lg:px-28 lg:py-20 ">
      <section className="flex-1 lg:basis-1/2 lg:border-r lg:pr-8 2xl:pr-24">
        <div className="mx-auto max-w-md space-y-8 lg:mr-0">
          <h1 className="text-4xl text-primary">
            <Link to="/">ლოგო</Link>
          </h1>
          <Outlet />
        </div>
      </section>
      <section className="hidden lg:block lg:basis-1/2">
        <div>სექცია</div>
      </section>
    </main>
  );
};
export default AuthLayout;
