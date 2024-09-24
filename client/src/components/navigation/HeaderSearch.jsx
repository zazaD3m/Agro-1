import { Search } from "lucide-react";
import { Button } from "../ui/button";

const HeaderSearch = () => {
  return (
    <div className="flex w-full">
      <input
        className="flex h-12 w-full rounded-l-md border-2 border-r-0 border-input bg-background px-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="რას ეძებთ"
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
