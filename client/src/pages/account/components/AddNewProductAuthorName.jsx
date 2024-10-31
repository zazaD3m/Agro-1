import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const AddNewProductAuthorName = ({ control, isLoading }) => {
  return (
    <FormField
      control={control}
      name="authorName"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="w-min text-nowrap font-normal">
            სახელი
            <span className="text-destructive">*</span>
          </FormLabel>
          <FormControl>
            <Input
              disabled={isLoading}
              type="text"
              {...field}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length > 20) return;
                field.onChange(value);
              }}
              value={field.value}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default AddNewProductAuthorName;
