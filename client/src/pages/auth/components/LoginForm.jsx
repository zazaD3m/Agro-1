import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router-dom";
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
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/user/userSlice";
import FormText from "./FormText";

const loginSchema = yup.object({
  password: yup.string().required("ჩაწერე პაროლი"),
  email: yup
    .string()
    .email("ჩაწერე სწორი ფორმატის ელფოსტა")
    .required("ჩაწერე ელფოსტა"),
});

const LoginForm = () => {
  const userInfo = useSelector(selectCurrentUser);
  const [loginMutation, { isError, isLoading }] = useLoginMutation();

  const form = useForm({
    defaultValues: {
      password: "",
      email: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, resetField, setValue, setFocus } = form;

  const onSubmit = (data) => {
    loginMutation(data);
  };

  useEffect(() => {
    if (isError) {
      resetField("password", { keepDirty: true, keepTouched: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.email) {
        const { email } = userInfo;
        setValue("email", email, { shouldDirty: true, shouldTouch: true });
        setFocus("password", { shouldSelect: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form {...form}>
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
                <FormLabel className="text-lg font-semibold">პაროლი</FormLabel>
                <Link
                  to="/auth/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  პაროლის აღდგენა
                </Link>
              </div>
              <FormControl>
                <PasswordInput size="lg" disabled={isLoading} {...field} />
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
