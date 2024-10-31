import { Form, FormSubmitError } from "@/components/ui/form";
import { useUpdateUserMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import FormText from "../auth/components/FormText";
import FormBirth from "../auth/components/FormBirth";
import FormGender from "../auth/components/FormGender";
import useUserInfo from "@/hooks/useUserInfo";
import { useToast } from "@/components/ui/use-toast";
import BIRTH_YEARS from "@/constants/BIRTH_YEARS";
import { GENDER } from "@/constants/USER_DETAILS";
import LOCATION from "@/constants/LOCATION";
import FormLocation from "../auth/components/FormLocation";
import { Navigate } from "react-router-dom";

const editAccountSchema = yup.object({
  password: yup.string().required("ჩაწერე პაროლი"),
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
});

const EditAccountInfo = () => {
  const { toast } = useToast();
  const { userInfo } = useUserInfo();
  const [updateUserMutation, { isError, error, isLoading, isSuccess }] =
    useUpdateUserMutation();

  const form = useForm({
    defaultValues: {
      password: "",
      firstName: userInfo.firstName ? userInfo.firstName : "",
      lastName: userInfo.lastName ? userInfo.lastName : "",
      genderId: userInfo.genderId ? userInfo.genderId : 1,
      birthYear: userInfo.birthYear ? userInfo.birthYear : "",
      locId: userInfo.locId ? userInfo.locId : "",
      phoneNumber: userInfo.phoneNumber ? String(userInfo.phoneNumber) : "",
    },
    resolver: yupResolver(editAccountSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, setError, setValue } = form;

  const onSubmit = (data) => {
    updateUserMutation(data);
  };

  useEffect(() => {
    if (isError) {
      if (error.data.message === "wrong password") {
        setError(
          "password",
          { message: "პაროლი არასწორია!" },
          { shouldFocus: true },
        );
      }
    }
    if (isSuccess) {
      toast({
        title: "პროფილი განახლებულია!",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  if (!userInfo?.loginStrategy.includes("local")) {
    return (
      <Navigate
        to="/account/edit/password"
        replace
        state={{ userIsLocal: false }}
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="gap-x-12 sm:grid sm:grid-cols-2">
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
        </div>
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
        <FormText
          control={control}
          name="password"
          label="პაროლი*"
          isLoading={isLoading}
          password={true}
          passwordShowDefault={true}
        />
        <FormSubmitError
          isError={isError && error.data.message !== "wrong password"}
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
export default EditAccountInfo;
