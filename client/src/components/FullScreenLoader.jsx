import { Spinner } from "./ui/spinner";

const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] h-screen w-full bg-background">
      <Spinner fullScreen size="huge">
        <span className="text-primary">იტვირთება...</span>
      </Spinner>
    </div>
  );
};
export default FullScreenLoader;
