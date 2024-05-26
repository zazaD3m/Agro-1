import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";

const FormCheckbox = ({
  control,
  name,
  label,
  redirectLink,
  redirectLinkText,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-start gap-x-2 gap-y-2 space-y-0  tracking-wider">
            <FormControl>
              <Checkbox
                className="mt-1"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="">
              <FormLabel>{label} - </FormLabel>
              <Link
                className="leading-snug text-blue-500 underline-offset-2 hover:underline"
                to={redirectLink}
              >
                {redirectLinkText}
              </Link>
            </div>
          </div>
          <FormMessage className="w-full" />
        </FormItem>
      )}
    />
  );
};
export default FormCheckbox;
