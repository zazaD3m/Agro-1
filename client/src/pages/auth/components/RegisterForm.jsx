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
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს და ციფრ(ებ)ს")
    .matches(/[0-9]/, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს და ციფრ(ებ)ს")
    .matches(
      /[a-zA-Z]/,
      "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს და ციფრ(ებ)ს",
    ),
  confirmPassword: yup
    .string()
    .required("ჩაწერე პაროლი")
    .oneOf([yup.ref("password")], "პაროლები ერთმანეთს არ ემთხვევა"),
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
  const [registerMutation, { isError, error, isLoading }] =
    useRegisterMutation();

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

  const { handleSubmit, control, setError, setValue } = form;

  const onSubmit = (data) => {
    registerMutation(data);
  };

  useEffect(() => {
    if (isError) {
      const status = error.status;
      const message = error.data.message;
      if (status === 409 && message === "Email is already taken") {
        setError(
          "email",
          {
            message:
              "ასეთი ელ-ფოსტით უკვე რეგისტრირებულია სხვა მომხმარებელი, გამოიყენეთ სხვა ელ-ფოსტა.",
          },
          { shouldFocus: true },
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
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
        <FormSubmitError
          isError={isError && error?.status !== 409 ? isError : false}
          error="მოხდა შეფერხება, სცადეთ ხელმეორედ."
        />
        <LoadingButton type="submit" className="w-full" loading={isLoading}>
          დადასტურება
        </LoadingButton>
      </form>
    </Form>
  );
};
export default RegisterForm;
