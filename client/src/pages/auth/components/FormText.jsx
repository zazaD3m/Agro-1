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
  className,
  ...props
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="text-md">{label}</FormLabel>
          <FormControl>
            {password ? (
              <PasswordInput
                disabled={isLoading || disabled}
                size="lg"
                showDefault={passwordShowDefault}
                {...props}
                {...field}
              />
            ) : (
              <Input
                disabled={isLoading || disabled}
                size="lg"
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
