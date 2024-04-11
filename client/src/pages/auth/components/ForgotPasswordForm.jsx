import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormMessageSuccess,
} from "@/components/ui/form";
import { useSendPasswordResetEmailMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { LoadingButton } from "@/components/ui/loading-button";

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("ჩაწერე სწორი ფორმატის ელფოსტა")
    .required("ჩაწერე ელფოსტა"),
});

const ForgotPasswordForm = () => {
  const [sendPasswordResetEmail, { isError, error, isLoading, isSuccess }] =
    useSendPasswordResetEmailMutation();

  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, setError } = form;

  const onSubmit = (data) => {
    sendPasswordResetEmail(data.email);
  };

  useEffect(() => {
    if (isError) {
      const errorMessage =
        error.status === 404
          ? "ანგარიში ამ ელფოსტით არ მოიძებნა."
          : "ბმულის გამოგზავნა ვერ მოხერხდა, ცადეთ კიდე.";

      setError("email", {
        message: errorMessage,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

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
                <FormMessageSuccess isSuccess={isSuccess}>
                  მოთხოვნა წარმატებულია, რამოდენიმე წუთში მეილზე მიიღებთ პაროლის
                  აღდგენის ბმულს.
                </FormMessageSuccess>
              </FormItem>
            )}
          />
        </div>
        <LoadingButton
          type="submit"
          className="w-full"
          loading={isLoading}
          disabled={isSuccess}
        >
          გაგრძელება
        </LoadingButton>
      </form>
    </Form>
  );
};
export default ForgotPasswordForm;
