import { Form, FormSubmitError } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useAddUserPasswordMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormText from "../../auth/components/FormText";
import { LoadingButton } from "@/components/ui/loading-button";

const addPasswordSchema = yup.object({
  password: yup.string().required("ჩაწერე პაროლი"),
  confirmPassword: yup
    .string()
    .required("ჩაწერე პაროლი")
    .oneOf([yup.ref("password")], "პაროლები ერთმანეთს არ ემთხვევა"),
});

const AddPassword = () => {
  const [addPasswordMutation, { isError, isLoading, isSuccess }] =
    useAddUserPasswordMutation();
  const { toast } = useToast();

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
      toast({
        title: "პაროლი წარმატებით შეიცვალა!",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-12 lg:px-4 lg:py-4"
      >
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
