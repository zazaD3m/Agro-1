import { Form } from "@/components/ui/form";
import { useResetPasswordMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import FormText from "./FormText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/user/userSlice";

const newPasswordSchema = yup.object({
  newPassword: yup
    .string()
    .required("ჩაწერე პაროლი")
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს და ციფრ(ებ)ს")
    .matches(/[0-9]/, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს და ციფრ(ებ)ს")
    .matches(
      /[a-zA-Z]/,
      "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს და ციფრ(ებ)ს",
    ),
  confirmNewPassword: yup
    .string()
    .required("ჩაწერე პაროლი")
    .oneOf([yup.ref("newPassword")], "პაროლები ერთმანეთს არ ემთხვევა"),
});

const ResetPasswordForm = ({ token, email }) => {
  const dispatch = useDispatch();
  const [
    resetPassword,
    { isError, error, isLoading, isSuccess, data: resetPasswordResponse },
  ] = useResetPasswordMutation();

  const form = useForm({
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: yupResolver(newPasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data) => {
    resetPassword({
      token: token,
      newPassword: data.newPassword,
      email: email,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      const { email } = resetPasswordResponse;
      dispatch(setUser({ userInfo: { email } }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-2">
          <FormText
            control={control}
            name="newPassword"
            label="ახალი პაროლი"
            isLoading={isLoading}
            disabled={isError || isSuccess}
            password={true}
            passwordShowDefault={true}
          />
          <FormText
            control={control}
            name="confirmNewPassword"
            label="გაიმეორე პაროლი"
            isLoading={isLoading}
            disabled={isError || isSuccess}
            password={true}
            passwordShowDefault={true}
          />
        </div>
        {isError ? (
          <div className="space-y-4">
            <p className="text-destructive">
              {error.status === 400
                ? "პაროლის განახლების ბმულს დრო გაუვიდა"
                : "მოხდა შეფერხებაა გთხოვთ თავიდან ცადოთ"}
            </p>
            <Button className="w-full" asChild>
              <Link to="/auth/forgot-password">ბმულის ხელახლა გამოგზავნა</Link>
            </Button>
          </div>
        ) : isSuccess ? (
          <div className="space-y-4">
            <p className="text-primary">პაროლი წარმატებით შეიცვალა</p>
            <Button className="w-full" asChild>
              <Link to="/auth/login">ანგარიშში შესვლა</Link>
            </Button>
          </div>
        ) : (
          <LoadingButton type="submit" className="w-full" loading={isLoading}>
            დადასტურება
          </LoadingButton>
        )}
      </form>
    </Form>
  );
};
export default ResetPasswordForm;
