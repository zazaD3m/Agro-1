import { cn } from "@/lib/utils";
import { Spinner } from "./ui/spinner";

const FullSizeLoader = ({ props, noText, className }) => {
  return (
    <div
      className={cn(
        "flex min-h-96 w-full items-center justify-center bg-background",
        className,
      )}
      {...props}
    >
      <Spinner size="huge">
        {!noText && <span className="text-primary">იტვირთება...</span>}
      </Spinner>
    </div>
  );
};
export default FullSizeLoader;
