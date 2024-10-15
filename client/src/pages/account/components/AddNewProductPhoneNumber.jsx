import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const AddNewProductPhoneNumber = ({ control, isLoading }) => {
  return (
    <FormField
      control={control}
      name="phoneNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="w-min text-nowrap font-normal">
            მიუთითეთ ტელეფონი
            <span className="text-destructive">*</span>
          </FormLabel>
          <FormControl>
            <Input
              label="ტელეფონის ნომერი*"
              type="text"
              inputMode="numeric"
              maxLength="9"
              placeholder="xxx-xx-xx-xx"
              disabled={isLoading}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default AddNewProductPhoneNumber;
