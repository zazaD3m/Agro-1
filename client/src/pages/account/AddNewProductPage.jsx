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
// import { DevTool } from "@hookform/devtools";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import FormText from "../auth/components/FormText";
import FormBirth from "../auth/components/FormBirth";
import LOCATION from "@/constants/LOCATION";
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
import AddNewProductCategory from "./components/AddNewProductCategory";
import AddNewProductDesc from "./components/AddNewProductDesc";
import AddNewProductTitle from "./components/AddNewProductTitle";
import AddNewProductName from "./components/AddNewProductName";
import AddNewProductPhoneNumber from "./components/AddNewProductPhoneNumber";
import AddNewProductLocation from "./components/AddNewProductLocation";

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
  title: yup
    .string()
    .trim()
    .min(1, "მიუთითეთ სათაური")
    .required("მიუთითეთ სათაური"),
  sellerType: yup.mixed().oneOf(["2", "3"]),
  price: yup.string().required("მიუთითეთ ფასი"),
  desc: yup.string(),
  locId: yup.mixed().oneOf(LOCATION.options, "აირჩიე მდებარეობა"),
  phoneNumber: yup
    .string()
    .required("ჩაწერე ტელეფონის ნომერი")
    .matches(/^[0-9]+$/, "უნდა შეიცავდეს მხოლოდ ციფრებს")
    .length(9, "უნდა იყოს 9 ციფრი")
    .typeError("ჩაწერე ტელეფონის ნომერი"),
  name: yup
    .string()
    .trim()
    .min(1, "მიუთითეთ სახელი")
    .required("მიუთითეთ სახელი"),
});

const AddNewProductPage = () => {
  const { toast } = useToast();
  const { userInfo } = useUserInfo();
  const preferedSellerType = useSelector(selectPreferedSellerType);
  const [addNewProduct, { isError, error, isLoading, isSuccess }] =
    useAddNewProductMutation();

  console.log(userInfo);

  const form = useForm({
    defaultValues: {
      sellerType: preferedSellerType ? preferedSellerType : "3",
      price: "",
      desc: "",
      title: "",
      locId: userInfo?.locId ? userInfo.locId : "",
      phoneNumber: userInfo?.phoneNumber ? userInfo.phoneNumber : "",
      name: userInfo?.firstName ? userInfo.firstName : "",
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
    shouldFocusError: true,
  });

  const { handleSubmit, control, setError, setValue, formState } = form;

  const onSubmit = (data) => {
    const newProduct = { ...data };

    console.log(newProduct);
    addNewProduct(newProduct);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <div className="w-full animate-fadeIn duration-300 lg:max-w-[768px]">
      <h2 className="pb-8 text-xl font-semibold">განცხადების დამატება</h2>
      {/* <div className="rounded-md bg-background p-4 shadow-sm">
        
      </div> */}
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-8"
        >
          <div className="rounded-md bg-background p-4 pt-2.5 shadow-sm">
            <h2 className="pb-4 font-medium">საკონტაქტო ინფორმაცია</h2>
            <div className="pb-4">
              <AddNewProductLocation control={control} setValue={setValue} />
            </div>
            <div className="flex justify-between gap-x-12 gap-y-4 max-md:flex-col">
              <div className="grow">
                <AddNewProductName control={control} />
              </div>
              <div className="grow">
                <AddNewProductPhoneNumber
                  control={control}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
          <div className="rounded-md bg-background p-4 pt-2.5 shadow-sm">
            <AddNewProductTitle control={control} />
          </div>
          <div className="rounded-md bg-background p-4 pt-2.5 shadow-sm">
            <AddNewProductFormSellerType
              control={control}
              userInfo={userInfo}
            />
          </div>
          <div className="rounded-md bg-background p-4 pt-2.5 shadow-sm">
            <AddNewProductPrice />
          </div>
          {/* <div className="rounded-md bg-background p-4 pt-2.5 shadow-sm">
            <AddNewProductCategory />
          </div> */}
          <div className="rounded-md bg-background p-4 pt-2.5 shadow-sm">
            <AddNewProductDesc control={control} />
          </div>

          <button type="submit">hhhhhh</button>
        </form>
      </Form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};
export default AddNewProductPage;
