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
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel asChild>
              <legend>
                {label}{" "}
                <Link
                  className="self-center leading-snug text-blue-500 underline-offset-2 hover:underline"
                  to={redirectLink}
                >
                  {redirectLinkText}
                </Link>
              </legend>
            </FormLabel>
          </div>
          <FormMessage className="w-full" />
        </FormItem>
      )}
    />
  );
};
export default FormCheckbox;
