import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, MessageCircleQuestion, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddNewProductFormSellerType = ({ control, userInfo }) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };
  return (
    <FormField
      control={control}
      name="sellerType"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel asChild className="text-lg">
            <legend>დაამატე განცხადება როგორც</legend>
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-x-8 max-xs:flex-col"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="ფიზიკური პირი" />
                </FormControl>
                <FormLabel className="text-base font-normal">
                  ფიზიკური პირი
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem disabled={!userInfo.shopId} value="მაღაზია" />
                </FormControl>
                <FormLabel className="text-base font-normal">მაღაზია</FormLabel>
                {userInfo.shopId ? null : (
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="self-start"
                    >
                      <MessageCircleQuestion
                        size={18}
                        className="text-action"
                      />
                    </PopoverTrigger>
                    <PopoverContent
                      side="top"
                      sideOffset={0}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="relative w-72"
                    >
                      <p className="pb-2 text-sm">
                        მაღაზიის გახსნის შემთხვევაში შეძლებთ დამატებითი
                        ინფორმაცია მიაწოდოთ მომხმარებელს
                      </p>
                      <Button asChild size="sm" variant="actionOutline">
                        <Link to="/">
                          დეტალურად <ArrowRight size={18} />
                        </Link>
                      </Button>
                      <Button
                        className="absolute right-0 top-0 lg:hidden"
                        size="icon"
                        variant="ghost"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                        }}
                      >
                        <X />
                      </Button>
                    </PopoverContent>
                  </Popover>
                )}
              </FormItem>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
export default AddNewProductFormSellerType;
