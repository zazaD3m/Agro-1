import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormGender = ({ control }) => {
  return (
    <FormField
      control={control}
      name="gender"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel asChild className="text-lg font-semibold">
            <legend>სქესი</legend>
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-x-8"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="მამრობითი" />
                </FormControl>
                <FormLabel className="font-normal">მამრობითი</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="მდედრობითი" />
                </FormControl>
                <FormLabel className="font-normal">მდედრობითი</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormGender;
