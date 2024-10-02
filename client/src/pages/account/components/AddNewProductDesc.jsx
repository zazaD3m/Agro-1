import Tiptap from "@/components/tiptap/TipTap";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const AddNewProductDesc = ({ control, isLoading }) => {
  return (
    <FormField
      control={control}
      name="desc"
      render={({ field }) => (
        <FormItem className="pb-8">
          <FormLabel className="cursor-default text-lg font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            აღწერა
          </FormLabel>
          <FormControl>
            <Tiptap onChange={field.onChange} isLoading={isLoading} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default AddNewProductDesc;
