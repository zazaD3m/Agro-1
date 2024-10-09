import { Form, FormSubmitError } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateUserPasswordMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormText from "../../auth/components/FormText";
import { LoadingButton } from "@/components/ui/loading-button";

const updatePasswordSchema = yup.object({
  password: yup.string().required("ჩაწერე პაროლი"),
  newPassword: yup
    .string()
    .required("ჩაწერე პაროლი")
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს და ციფრ(ებ)ს")
    .matches(/[0-9]/, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს და ციფრ(ებ)ს")
    .matches(
      /[a-zA-Z]/,
      "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს და ასო(ებ)ს",
    ),
  confirmNewPassword: yup
    .string()
    .required("ჩაწერე პაროლი")
    .oneOf([yup.ref("newPassword")], "პაროლები ერთმანეთს არ ემთხვევა"),
});

const UpdatePassword = () => {
  const [updatePasswordMutation, { isError, error, isLoading, isSuccess }] =
    useUpdateUserPasswordMutation();
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: yupResolver(updatePasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, setError, reset } = form;

  const onSubmit = (data) => {
    updatePasswordMutation({
      password: data.password,
      newPassword: data.newPassword,
    });
  };

  useEffect(() => {
    if (isError) {
      if (error.data.message === "Wrong Password") {
        setError(
          "password",
          { message: "არსებული პაროლი არასწორია!" },
          { shouldFocus: true },
        );
      }
    }
    if (isSuccess) {
      toast({
        title: "პაროლი წარმატებით შეიცვალა!",
      });
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-12">
          <FormText
            control={control}
            name="newPassword"
            label="ახალი პაროლი*"
            isLoading={isLoading}
            password={true}
            passwordShowDefault={true}
          />
          <FormText
            control={control}
            name="confirmNewPassword"
            label="გაიმეორე ახალი პაროლი*"
            isLoading={isLoading}
            password={true}
            passwordShowDefault={true}
          />
          <FormText
            control={control}
            name="password"
            label="არსებული პაროლი*"
            isLoading={isLoading}
            password={true}
            passwordShowDefault={true}
          />
        </div>
        <FormSubmitError
          isError={isError && error.data.message !== "Wrong Password"}
          error="მოხდა შეცდომა, პაროლი არ შეიცვალა!"
        />
        <LoadingButton
          variant="primary"
          size="lg"
          type="submit"
          className="w-full lg:max-w-64"
          loading={isLoading}
        >
          პაროლის შეცვლა
        </LoadingButton>
      </form>
    </Form>
  );
};
export default UpdatePassword;
