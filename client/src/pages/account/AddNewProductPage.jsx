import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSubmitError,
} from "@/components/ui/form";
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
import { useAddNewProductMutation } from "@/features/product/productApiSlice";
import { useSelector } from "react-redux";
import { selectPreferedSellerType } from "@/features/user/userSlice";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import AddNewProductFormSellerType from "./components/AddNewProductFormSellerType";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import AddNewProductPrice from "./components/AddNewProductPrice";

const addNewProductSchema = yup.object({
  // password: yup.string().required("ჩაწერე პაროლი"),
  // firstName: yup.string(),
  // lastName: yup.string(),
  // gender: yup.mixed().oneOf(["მდედრობითი", "მამრობითი", ""], "აირჩიე სქესი"),
  // birthYear: yup.mixed().oneOf([...BIRTH_YEARS, ""], "აირჩიე დაბადების წელი"),
  // phoneNumber: yup
  //   .string()
  //   .required("ჩაწერე ტელეფონის ნომერი")
  //   .matches(/^[0-9]+$/, "უნდა შეიცავდეს მხოლოდ ციფრებს")
  //   .length(9, "უნდა იყოს 9 ციფრი")
  //   .typeError("ჩაწერე ტელეფონის ნომერი"),
  sellerType: yup.mixed().oneOf(["მაღაზია", "ფიზიკური პირი"]),
  price: yup.string(),
});

const AddNewProductPage = () => {
  const { toast } = useToast();
  const { userInfo } = useUserInfo();
  const preferedSellerType = useSelector(selectPreferedSellerType);
  const [addNewProduct, { isError, error, isLoading, isSuccess }] =
    useAddNewProductMutation();

  const form = useForm({
    defaultValues: {
      sellerType: preferedSellerType ? preferedSellerType : "ფიზიკური პირი",
      price: "",
      // password: "",
      // firstName: userInfo.firstName ? userInfo.firstName : "",
      // lastName: userInfo.lastName ? userInfo.lastName : "",
      // gender: userInfo.gender ? userInfo.gender : "",
      // birthYear: userInfo.birthYear ? userInfo.birthYear : "",
      // phoneNumber: userInfo.phoneNumber ? String(userInfo.phoneNumber) : "",
    },
    resolver: yupResolver(addNewProductSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, setError, setValue } = form;

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <div className="w-full lg:max-w-[768px]">
      <h2 className="pb-8 text-xl font-semibold">განცხადების დამატება</h2>
      {/* <div className="rounded-md bg-background px-4 py-4 shadow-sm">
        
      </div> */}
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-8"
        >
          <div className="rounded-md bg-background px-4 pb-4 pt-2.5 shadow-sm">
            <AddNewProductFormSellerType
              control={control}
              userInfo={userInfo}
            />
          </div>
          <div className="rounded-md bg-background px-4 pb-4 pt-2.5 shadow-sm">
            <AddNewProductPrice />
          </div>
          <button type="submit">hhhhhh</button>
        </form>
      </Form>
    </div>
  );
};
export default AddNewProductPage;
