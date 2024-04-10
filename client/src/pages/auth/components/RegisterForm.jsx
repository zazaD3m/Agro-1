import { DevTool } from "@hookform/devtools";
import { Form, FormSubmitError } from "@/components/ui/form";
import { useRegisterMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import FormText from "./FormText";
import FormBirth from "./FormBirth";
import { BIRTH_YEARS } from "@/constants/constants";
import FormGender from "./FormGender";
import FormCheckbox from "./FormCheckbox";

const registerSchema = yup.object({
  password: yup
    .string()
    .required("ჩაწერე პაროლი")
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს.")
    .matches(/\d/, "პაროლი უნდა შეიცავდეს ციფრ(ებ)ს"),
  confirmPassword: yup
    .string()
    .required("ჩაწერე პაროლი")
    .oneOf([yup.ref("password")], "პაროლები ერთმანეთს არ ემთხვევა")
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს.")
    .matches(/\d/, "პაროლი უნდა შეიცავდეს ციფრ(ებ)ს"),
  email: yup
    .string()
    .email("ჩაწერე სწორი ფორმატის ელფოსტა")
    .required("ჩაწერე ელფოსტა"),
  firstName: yup.string().required("ჩაწერე სახელი"),
  lastName: yup.string().required("ჩაწერე გვარი"),
  gender: yup.mixed().oneOf(["მდედრობითი", "მამრობითი"], "აირჩიე სქესი"),
  birthYear: yup.mixed().oneOf(BIRTH_YEARS, "აირჩიე დაბადების წელი"),
  phoneNumber: yup
    .number()
    .typeError("ჩაწერე ტელეფონის ნომერი")
    .required("ჩაწერე ტელეფონის ნომერი"),
  agreeTerms: yup
    .boolean()
    .oneOf([true], "დაეთანხმე საიტის წესებსა და პირობებს"),
  agreePrivacyPolicy: yup.boolean().oneOf([true, false]),
});

const RegisterForm = () => {
  const [registerMutation, { isError, isLoading }] = useRegisterMutation();
  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
      gender: "",
      birthYear: "",
      phoneNumber: "",
      agreeTerms: false,
      agreePrivacyPolicy: false,
    },
    resolver: yupResolver(registerSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, reset, setValue } = form;

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
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormText
            control={control}
            name="email"
            label="ელფოსტა"
            isLoading={isLoading}
            placeholder="example@gmail.com"
            autoComplete="email"
          />
          <FormText
            control={control}
            name="password"
            label="პაროლი"
            isLoading={isLoading}
            password={true}
            passwordShowDefault={true}
          />
          <FormText
            control={control}
            name="confirmPassword"
            label="გაიმეორე პაროლი"
            isLoading={isLoading}
            password={true}
            passwordShowDefault={true}
          />
          <FormText
            control={control}
            name="firstName"
            label="სახელი"
            isLoading={isLoading}
          />
          <FormText
            control={control}
            name="lastName"
            label="გვარი"
            isLoading={isLoading}
          />
          <FormGender control={control} />
          <FormBirth control={control} setValue={setValue} />
          <FormText
            control={control}
            name="phoneNumber"
            label="ტელეფონის ნომერი"
            type="number"
            isLoading={isLoading}
          />
          <FormCheckbox
            control={control}
            name="agreeTerms"
            label="ვეთანხმები"
            redirectLink="/rules"
            redirectLinkText="წესებსა და პირობებს"
          />
          <FormCheckbox
            control={control}
            name="agreePrivacyPolicy"
            label="ვეთანხმები"
            redirectLink="/privacy-agreement"
            redirectLinkText="კონფიდენციალობის პოლიტიკას"
          />
          {/*  */}
          <FormSubmitError
            isError={isError}
            error="მომხმარებელი ან პაროლი არასწორია"
          />
          <LoadingButton type="submit" className="w-full" loading={isLoading}>
            დადასტურება
          </LoadingButton>
        </form>
      </Form>
      <DevTool control={control} />
    </>
  );
};
export default RegisterForm;
