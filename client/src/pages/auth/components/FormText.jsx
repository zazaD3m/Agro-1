import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";

const FormText = ({
  control,
  name,
  label,
  isLoading,
  disabled,
  placeholder,
  password,
  passwordShowDefault,
  ...props
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">{label}</FormLabel>
          <FormControl>
            {password ? (
              <PasswordInput
                disabled={isLoading || disabled}
                showDefault={passwordShowDefault}
                {...props}
                {...field}
              />
            ) : (
              <Input
                disabled={isLoading || disabled}
                placeholder={placeholder}
                {...props}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormText;
