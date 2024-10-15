import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const AddNewProductTitle = ({ control, isLoading }) => {
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">
            სათაური
            <span className="align-top text-sm font-semibold text-destructive">
              *
            </span>
          </FormLabel>
          <FormControl>
            <Input
              disabled={isLoading}
              type="text"
              {...field}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length > 50) return;
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
export default AddNewProductTitle;
