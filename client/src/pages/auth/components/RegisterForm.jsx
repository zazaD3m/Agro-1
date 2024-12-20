import { Form, FormSubmitError } from "@/components/ui/form";
import { useRegisterMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { useEffect } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import FormText from "./FormText";
import FormBirth from "./FormBirth";
import FormGender from "./FormGender";
import FormCheckbox from "./FormCheckbox";
import { useNavigate } from "react-router-dom";
import BIRTH_YEARS from "@/constants/BIRTH_YEARS";
import { GENDER } from "@/constants/USER_DETAILS";
import LOCATION from "@/constants/LOCATION";
import FormLocation from "./FormLocation";

const registerSchema = yup.object({
  password: yup
    .string()
    .trim()
    .required("ჩაწერე პაროლი")
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს"),
  confirmPassword: yup
    .string()
    .trim()
    .required("ჩაწერე პაროლი")
    .oneOf([yup.ref("password")], "პაროლები ერთმანეთს არ ემთხვევა"),
  email: yup
    .string()
    .trim()
    .email("ჩაწერე სწორი ფორმატის ელფოსტა")
    .required("ჩაწერე ელფოსტა"),
  firstName: yup.string().trim().max(20),
  lastName: yup.string().trim().max(20),
  genderId: yup.mixed().oneOf(GENDER.options, "აირჩიე სქესი"),
  birthYear: yup.mixed().oneOf(BIRTH_YEARS, "აირჩიე დაბადების წელი"),
  locId: yup.mixed().oneOf(LOCATION.options, "აირჩიე ლოკაცია"),
  phoneNumber: yup
    .string()
    .required("ჩაწერე ტელეფონის ნომერი")
    .matches(/^[0-9]+$/, "უნდა შეიცავდეს მხოლოდ ციფრებს")
    .length(9, "უნდა იყოს 9 ციფრი")
    .typeError("ჩაწერე ტელეფონის ნომერი"),
  agreeTerms: yup.mixed().oneOf([1], "დაეთანხმე საიტის წესებსა და პირობებს"),
  agreePrivacyPolicy: yup.mixed().oneOf([0, 1]),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const [registerMutation, { isError, error, isLoading, isSuccess }] =
    useRegisterMutation();

  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
      genderId: 1,
      birthYear: "",
      locId: "",
      phoneNumber: "",
      agreeTerms: 0,
      agreePrivacyPolicy: 0,
    },
    resolver: yupResolver(registerSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, setError, setValue, getValues } = form;

  const onSubmit = (data) => {
    const newUser = { ...data };

    delete newUser.confirmPassword;

    registerMutation(newUser);
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
    if (isSuccess) {
      const { email, password } = getValues();
      navigate("/auth/login", {
        state: {
          isRegisterSuccess: true,
          email: email,
          password: password,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <FormText
          control={control}
          name="email"
          label="ელფოსტა*"
          isLoading={isLoading}
          placeholder="m@example.com"
          autoComplete="email"
        />
        <FormText
          control={control}
          name="password"
          label="პაროლი*"
          isLoading={isLoading}
          password={true}
          passwordShowDefault={true}
        />
        <FormText
          control={control}
          name="confirmPassword"
          label="გაიმეორე პაროლი*"
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
        <FormLocation control={control} setValue={setValue} />
        <FormText
          control={control}
          name="phoneNumber"
          label="ტელეფონის ნომერი*"
          type="text"
          inputMode="numeric"
          maxLength="9"
          placeholder="xxx-xx-xx-xx"
          isLoading={isLoading}
        />
        <FormCheckbox
          control={control}
          setValue={setValue}
          name="agreeTerms"
          label="ვეთანხმები"
          redirectLink="/rules"
          redirectLinkText="წესებსა და პირობებს*"
        />
        <FormSubmitError
          isError={isError && error?.status !== 409 ? isError : false}
          error="მოხდა შეფერხება, სცადეთ ხელმეორედ."
        />
        <LoadingButton
          variant="primary"
          size="lg"
          type="submit"
          className="w-full"
          loading={isLoading}
        >
          დადასტურება
        </LoadingButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
