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
import FormText from "@/pages/auth/components/FormText";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useContactMutation } from "@/features/general/generalApiSlice";

const contactSchema = yup.object({
  email: yup.string().required("ჩაწერე ელფოსტა"),
  name: yup.string(),
  phoneNumber: yup
    .string()
    .required("ჩაწერე ტელეფონის ნომერი")
    .matches(/^[0-9]+$/, "უნდა შეიცავდეს მხოლოდ ციფრებს")
    .length(9, "უნდა იყოს 9 ციფრი")
    .typeError("ჩაწერე ტელეფონის ნომერი"),
  message: yup.string(),
});

const ContactForm = () => {
  const { toast } = useToast();

  const [contactMutation, { isError, isLoading, isSuccess }] =
    useContactMutation();

  const form = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
      phoneNumber: "",
    },
    resolver: yupResolver(contactSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = (data) => {
    data.phoneNumber = parseInt(data.phoneNumber);
    contactMutation(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "წერილი მიღებულია!",
      });
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Form {...form}>
      <div className="w-full rounded-lg border-2 bg-background px-2 pb-12 pt-8 shadow-sm xs:px-4 sm:w-2/3 lg:w-1/2 lg:px-12">
        <h1 className="pb-12 text-center text-2xl font-semibold">მოგვწერე</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormText
            control={control}
            name="name"
            label="სახელი"
            isLoading={isLoading}
          />
          <FormText
            control={control}
            name="email"
            label="ელფოსტა"
            isLoading={isLoading}
            autoComplete="email"
          />
          <FormText
            control={control}
            name="phoneNumber"
            label="ტელეფონის ნომერი"
            type="text"
            inputMode="numeric"
            maxLength="9"
            placeholder="xxx-xx-xx-xx"
            isLoading={isLoading}
          />
          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem className="pb-8">
                <FormLabel>წერილი</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    className="max-sm:min-h-28"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormSubmitError
            isError={isError}
            error="მოხდა შეფერხება, სცადეთ ხელმეორედ."
          />
          <LoadingButton
            variant="primary"
            size="lg"
            type="submit"
            className="w-full"
            loading={isLoading}
          >
            გაგზავნა
          </LoadingButton>
        </form>
      </div>
    </Form>
  );
};

export default ContactForm;
