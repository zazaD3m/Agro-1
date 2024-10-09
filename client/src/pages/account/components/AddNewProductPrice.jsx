import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const AddNewProductPrice = ({ control, isLoading }) => {
  return (
    <>
      <FormField
        control={control}
        name="price"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">ფასი</FormLabel>
            <p className="text-sm font-light">
              მიუთითე ნივთის ფასი
              <span className="font-semibold text-destructive">*</span>
            </p>
            <FormControl>
              <Input
                disabled={isLoading || field.value === "0.00"}
                type="text"
                inputMode="numeric"
                className="sm:max-w-48"
                {...field}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length > 6) return;
                  if (
                    value === "" ||
                    (!isNaN(value) && parseFloat(value) >= 0)
                  ) {
                    field.onChange(value);
                  }
                }}
                value={field.value === "0.00" ? "" : field.value}
              />
            </FormControl>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="addProductPrice-0"
                className="size-5"
                checked={field.value === "0.00"}
                onCheckedChange={() => {
                  field.onChange(field.value === "0.00" ? "" : "0.00");
                }}
              />
              <label
                htmlFor="addProductPrice-0"
                className="cursor-pointer text-sm"
              >
                ფასი შეთანხმებით
              </label>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
export default AddNewProductPrice;
