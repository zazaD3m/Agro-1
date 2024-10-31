import { PasswordInput } from "@/components/ui/password-input";
import { Link, useLocation } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSubmitError,
} from "@/components/ui/form";
import { useLoginMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import FormText from "./FormText";

const loginSchema = yup.object({
  password: yup.string().required("ჩაწერე პაროლი"),
  email: yup.string().required("ჩაწერე ელფოსტა"),
});

const LoginForm = () => {
  const { state } = useLocation();
  const [loginMutation, { isError, isLoading }] = useLoginMutation();
  const form = useForm({
    defaultValues: {
      password: state?.password || "",
      email: state?.email || "",
    },
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, resetField } = form;

  const onSubmit = (data) => {
    loginMutation(data);
  };

  useEffect(() => {
    if (isError) {
      resetField("password", { keepDirty: true, keepTouched: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <Form {...form}>
      {state?.isRegisterSuccess ? (
        <div>
          <p className="text-primary-light">
            რეგისტრაცია წარმატებულია.
            <br />
            გთხოვთ შეხვიდეთ თქვენს ანგარისში
          </p>
        </div>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormText
          control={control}
          name="email"
          label="ელფოსტა"
          isLoading={isLoading}
          placeholder="m@example.com"
          autoComplete="email"
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>პაროლი</FormLabel>
                <Link
                  to="/auth/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  პაროლის აღდგენა
                </Link>
              </div>
              <FormControl>
                <PasswordInput disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSubmitError
          isError={isError}
          error="მომხმარებელი ან პაროლი არასწორია"
        />
        <LoadingButton
          variant="primary"
          size="lg"
          type="submit"
          className="w-full"
          loading={isLoading}
        >
          შესვლა
        </LoadingButton>
      </form>
    </Form>
  );
};
export default LoginForm;
