import { Form, FormSubmitError } from "@/components/ui/form";
import { useAddUserPasswordMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormText from "../../auth/components/FormText";
import { LoadingButton } from "@/components/ui/loading-button";
import { Navigate, useLocation } from "react-router-dom";

const addPasswordSchema = yup.object({
  password: yup
    .string()
    .trim()
    .required("ჩაწერე პაროლი")
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს"),
  confirmPassword: yup
    .string()
    .required("ჩაწერე პაროლი")
    .oneOf([yup.ref("password")], "პაროლები ერთმანეთს არ ემთხვევა"),
});

const AddPassword = () => {
  const [addPasswordMutation, { isError, isLoading, isSuccess }] =
    useAddUserPasswordMutation();
  const location = useLocation();

  const userIsLocal = location.state?.userIsLocal;
  const shouldTitleRender = userIsLocal === false;

  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(addPasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data) => {
    addPasswordMutation({
      password: data.password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      <Navigate to="/account/edit/info" />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {shouldTitleRender && (
          <h1 className="pb-4 text-sm lg:text-base">
            პირადი ინფორმაციის რედაქტირებისთვის აუცილებელია პაროლის დამატება
          </h1>
        )}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-12">
          <FormText
            control={control}
            name="password"
            label="ახალი პაროლი*"
            isLoading={isLoading}
            password={true}
            passwordShowDefault={true}
          />
          <FormText
            control={control}
            name="confirmPassword"
            label="გაიმეორე ახალი პაროლი*"
            isLoading={isLoading}
            password={true}
            passwordShowDefault={true}
          />
        </div>
        <FormSubmitError
          isError={isError}
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
export default AddPassword;
