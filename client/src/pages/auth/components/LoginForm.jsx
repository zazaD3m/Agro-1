import { Input } from "@/components/ui/input";
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

  const { handleSubmit, control, reset, setValue, setFocus } = form;

  const onSubmit = (data) => {
    loginMutation(data);
  };

  useEffect(() => {
    if (isError) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, userInfo]);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.email) {
        const { email } = userInfo;
        setValue("email", email, { shouldDirty: true, shouldTouch: true });
        setFocus("password", { shouldSelect: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-2">
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">ელფოსტა</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel className="text-lg font-semibold">
                    პაროლი
                  </FormLabel>
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
        </div>
        <FormSubmitError
          isError={isError}
          error="მომხმარებელი ან პაროლი არასწორია"
        />
        <LoadingButton type="submit" className="w-full" loading={isLoading}>
          შესვლა
        </LoadingButton>
      </form>
    </Form>
  );
};
export default LoginForm;
