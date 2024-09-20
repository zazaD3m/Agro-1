import { Form, FormSubmitError } from "@/components/ui/form";
import { useUpdateUserMutation } from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import FormText from "../auth/components/FormText";
import FormBirth from "../auth/components/FormBirth";
import { BIRTH_YEARS } from "@/constants/constants";
import FormGender from "../auth/components/FormGender";
import useUserInfo from "@/hooks/useUserInfo";
import { useToast } from "@/components/ui/use-toast";

const editAccountSchema = yup.object({
  password: yup.string().required("ჩაწერე პაროლი"),
  firstName: yup.string(),
  lastName: yup.string(),
  gender: yup.mixed().oneOf(["მდედრობითი", "მამრობითი", ""], "აირჩიე სქესი"),
  birthYear: yup.mixed().oneOf([...BIRTH_YEARS, ""], "აირჩიე დაბადების წელი"),
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
      gender: userInfo.gender ? userInfo.gender : "",
      birthYear: userInfo.birthYear ? userInfo.birthYear : "",
      phoneNumber: userInfo.phoneNumber ? String(userInfo.phoneNumber) : "",
    },
    resolver: yupResolver(editAccountSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, setError, setValue } = form;

  const onSubmit = (data) => {
    data.phoneNumber = parseInt(data.phoneNumber);
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
