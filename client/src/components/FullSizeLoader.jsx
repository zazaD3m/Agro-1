import { Spinner } from "./ui/spinner";

const FullSizeLoader = () => {
  return (
    <div className="flex size-full items-center justify-center bg-background">
      <Spinner size="huge">
        <span className="text-primary">იტვირთება...</span>
      </Spinner>
    </div>
  );
};
export default FullSizeLoader;
