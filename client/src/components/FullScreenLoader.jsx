import { Spinner } from "./ui/spinner";

const FullScreenLoader = () => {
  return (
    <div className="grid h-screen w-full place-items-center">
      <Spinner fullScreen size="huge">
        <span className="text-primary">იტვირთება...</span>
      </Spinner>
    </div>
  );
};
export default FullScreenLoader;
