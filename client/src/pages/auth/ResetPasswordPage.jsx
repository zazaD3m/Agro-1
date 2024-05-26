import ResetPasswordForm from "./components/ResetPasswordForm";
import { Link, Navigate, useParams } from "react-router-dom";
import { useResetPasswordCheckMutation } from "@/features/auth/authApiSlice";
import { useEffect } from "react";
import FullScreenLoader from "@/components/FullScreenLoader";
import { Button } from "@/components/ui/button";

const ResetPasswordPage = () => {
  const { resetToken } = useParams();

  const [
    resetPasswordCheck,
    { isError, error, isLoading, isSuccess, isUninitialized, data },
  ] = useResetPasswordCheckMutation();

  useEffect(() => {
    if (resetToken) {
      resetPasswordCheck({ token: resetToken });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isUninitialized || isLoading) {
    return <FullScreenLoader />;
  }
  if (isError && error.status !== 400) {
    return <Navigate to="/" replace />;
  }
  if (
    isError &&
    error.status === 400 &&
    error.data.message === "Bad request!"
  ) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <h1 className="text-xl font-semibold sm:text-3xl">პაროლის აღდგენა</h1>
      {isSuccess ? (
        <>
          <p className="py-2">შეიყვანეთ ახალი პაროლი</p>
          <ResetPasswordForm token={resetToken} email={data.email} />
        </>
      ) : null}
      {isError && error?.status === 400 ? (
        <>
          <p className="pb-4 text-destructive">
            {error.data.message === "Token Expired"
              ? "პაროლის განახლების ბმულს დრო გაუვიდა"
              : null}
            {error.data.message === "Token already claimed"
              ? "პაროლის განახლების ეს ბმული უკვე გამოიყენეთ"
              : null}
          </p>
          <Button className="w-full" variant="primary" size="lg" asChild>
            <Link to="/auth/forgot-password">ახალი ბმულის გამოგზავნა</Link>
          </Button>
        </>
      ) : null}
    </>
  );
};
export default ResetPasswordPage;
