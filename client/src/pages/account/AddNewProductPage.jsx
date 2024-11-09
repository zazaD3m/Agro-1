import { Form } from "@/components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import LOCATION from "@/constants/LOCATION";
import useUserInfo from "@/hooks/useUserInfo";
import { useAddNewProductMutation } from "@/features/product/productApiSlice";
import AddNewProductPrice from "./components/AddNewProductPrice";
import AddNewProductCategory from "./components/AddNewProductCategory";
import AddNewProductDesc from "./components/AddNewProductDesc";
import AddNewProductTitle from "./components/AddNewProductTitle";

import AddNewProductPhoneNumber from "./components/AddNewProductPhoneNumber";
import AddNewProductLocation from "./components/AddNewProductLocation";
import { CATEGORIES } from "@/data/categories-data";
import AddNewProductAuthorName from "./components/AddNewProductAuthorName";
import AddNewProductImages from "./components/AddNewProductImages";
import { useEffect, useLayoutEffect, useState } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import { useNavigate } from "react-router-dom";

const addNewProductSchema = yup.object({
  title: yup
    .string()
    .required("მიუთითეთ სათაური")
    .trim()
    .min(1, "მიუთითეთ სათაური")
    .max(50),
  price: yup.string().required("მიუთითეთ ფასი"),
  desc: yup.string().max(500, "შეამცირეთ აღწერა"),
  LocId: yup.mixed().oneOf(LOCATION.options, "აირჩიე მდებარეობა"),
  CatId: yup
    .number()
    .typeError("მიუთითეთ კატეგორია")
    .required("მიუთითეთ კატეგორია"),
  MainCatId: yup
    .number()
    .typeError("მიუთითეთ კატეგორია")
    .required("მიუთითეთ კატეგორია"),
  SubCatId: yup
    .number()
    .typeError("მიუთითეთ კატეგორია")
    .required("მიუთითეთ კატეგორია"),
  phoneNumber: yup
    .string()
    .required("ჩაწერე ტელეფონის ნომერი")
    .matches(/^[0-9]+$/, "უნდა შეიცავდეს მხოლოდ ციფრებს")
    .length(9, "უნდა იყოს 9 ციფრი")
    .test(
      "first-char-not-zero",
      "ჩაწერე სწორი ფორმატის ტელეფონის ნომერი",
      (value) => {
        return value ? value[0] !== "0" : true;
      },
    )
    .typeError("ჩაწერე სწორი ფორმატის ტელეფონის ნომერი"),
  authorName: yup
    .string()
    .trim()
    .min(1, "მიუთითეთ სახელი")
    .required("მიუთითეთ სახელი"),
});

const sanitizeTitle = (title, CatId) => {
  const allowedCharactersRegex = /^[a-zA-Zა-ჰ0-9\s-'""]*$/;

  const sanitizedTitle = title
    .split("")
    .filter((char) => allowedCharactersRegex.test(char))
    .join("");

  if (sanitizedTitle.length > 0) {
    return sanitizedTitle;
  } else {
    return CATEGORIES[CatId].name;
  }
};

const AddNewProductPage = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState(null);
  const { userInfo } = useUserInfo();
  const [addNewProduct, { isError, isLoading, isSuccess }] =
    useAddNewProductMutation();

  useLayoutEffect(() => {
    if (userInfo.freeSlots === 0) {
      navigate("/account/my-products/active", {
        state: {
          message: "no free slots remaining",
        },
        replace: true,
      });
    }
  }, [userInfo]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/account/my-products/active", {
        state: {
          message: "new product added",
        },
      });
    }
    if (isError) {
      navigate("/account/my-products/active", { replace: true });
    }
  }, [isSuccess, isError]);

  const form = useForm({
    defaultValues: {
      price: "",
      desc: "",
      title: "",
      LocId: userInfo?.locId ? userInfo.locId : "",
      CatId: "",
      SubCatId: "",
      MainCatId: "",
      phoneNumber: userInfo?.phoneNumber ? userInfo.phoneNumber : "",
      authorName: userInfo?.firstName ? userInfo.firstName : "",
    },
    resolver: yupResolver(addNewProductSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    shouldFocusError: true,
  });

  const { handleSubmit, control, setValue } = form;

  const onSubmit = (data) => {
    const newProduct = { ...data };
    newProduct.title = sanitizeTitle(data.title, data.CatId);
    if (images && images.length > 0) {
      newProduct.images = images;
    }
    addNewProduct(newProduct);
  };

  return (
    <div className="w-full animate-fadeIn duration-300 lg:max-w-[768px]">
      <h2 className="pb-8 text-xl font-semibold">განცხადების დამატება</h2>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-8"
        >
          <div className="rounded-md border bg-background p-4 pt-2.5 shadow-md">
            <AddNewProductCategory control={control} setValue={setValue} />
          </div>
          <div className="rounded-md border bg-background p-4 pt-2.5 shadow-md">
            <AddNewProductImages images={images} setImages={setImages} />
          </div>
          <div className="rounded-md border bg-background p-4 pt-2.5 shadow-md">
            <AddNewProductTitle control={control} />
          </div>
          <div className="rounded-md border bg-background p-4 pt-2.5 shadow-md">
            <AddNewProductDesc control={control} />
          </div>
          <div className="rounded-md border bg-background p-4 pt-2.5 shadow-md">
            <AddNewProductPrice />
          </div>
          <div className="rounded-md border bg-background p-4 pt-2.5 shadow-md">
            <h2 className="pb-4 font-medium">საკონტაქტო ინფორმაცია</h2>
            <div className="pb-4">
              <AddNewProductLocation control={control} />
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 max-md:grid-cols-1">
              <AddNewProductAuthorName control={control} />
              <AddNewProductPhoneNumber
                control={control}
                isLoading={isLoading}
              />
            </div>
          </div>

          <LoadingButton
            variant="primary"
            size="lg"
            type="submit"
            className="w-full"
            loading={isLoading}
          >
            დამატება
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
};
export default AddNewProductPage;
