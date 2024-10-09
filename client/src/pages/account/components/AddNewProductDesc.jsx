import Tiptap from "@/components/tiptap/TipTap";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";

const AddNewProductDesc = ({ control, isLoading }) => {
  return (
    <FormField
      control={control}
      name="desc"
      render={({ field }) => (
        <FormItem className="pb-8">
          <Label asChild className="cursor-default text-base">
            <legend>აღწერა</legend>
          </Label>
          <Tiptap onChange={field.onChange} isLoading={isLoading} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default AddNewProductDesc;
