import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { Button } from "../ui/button";

const HeaderSearch = () => {
  const [category, setCategory] = useState("ყველა");

  return (
    <div className="flex w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="accent"
            className="group/searchCat h-12 w-min shrink-0 gap-x-1 rounded-r-none border-2 px-1 py-0"
          >
            <span>{category}</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/searchCat:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="z-[999] w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
            {["ყველა", "ნერგები", "ყვავილები", "ცხოველები", "ტექნიკა"].map(
              (el) => (
                <DropdownMenuRadioItem value={el} key={el}>
                  {el}
                </DropdownMenuRadioItem>
              ),
            )}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <input
        className="flex h-12 w-full border-2 border-l-0 border-r-0 border-input bg-background px-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="მოძებნა"
      />
      <Button
        variant="action"
        className="size-12 shrink-0 rounded-l-none border-2 border-action p-0"
      >
        <Search />
      </Button>
    </div>
  );
};
export default HeaderSearch;
