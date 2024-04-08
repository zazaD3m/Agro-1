import { Spinner } from "./ui/spinner";

const FullScreenLoader = () => {
  return (
    <div className="grid h-screen w-full place-items-center">
      <Spinner fullScreen size="huge">
        იტვირთება
      </Spinner>
    </div>
  );
};
export default FullScreenLoader;
