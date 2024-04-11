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

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("ჩაწერე სწორი ფორმატის ელფოსტა")
    .required("ჩაწერე ელფოსტა"),
});

const ForgotPasswordForm = () => {
  const [loginMutation, { isError, isLoading }] = useLoginMutation();

  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isError) {
      reset();
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
              </FormItem>
            )}
          />
        </div>
        <LoadingButton type="submit" className="w-full" loading={isLoading}>
          გაგრძელება
        </LoadingButton>
      </form>
    </Form>
  );
};
export default ForgotPasswordForm;
