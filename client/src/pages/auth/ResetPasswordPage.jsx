import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-2xl">პაროლის აღდგენა</CardTitle>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <>
            <p className="mb-8 mt-2">შეიყვანეთ ახალი პაროლი</p>
            <ResetPasswordForm token={resetToken} email={data.email} />
          </>
        ) : null}
        {isError && error?.status === 400 ? (
          <div className="space-y-4">
            <p className="text-destructive">
              პაროლის განახლების ბმულს დრო გაუვიდა
            </p>
            <Button className="w-full" asChild>
              <Link to="/auth/forgot-password">ბმულის ხელახლა გამოგზავნა</Link>
            </Button>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};
export default ResetPasswordPage;
