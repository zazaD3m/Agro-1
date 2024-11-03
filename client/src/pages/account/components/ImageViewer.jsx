import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

const ImageViewer = ({ isLoading, isSuccess, imgName }) => {
  return (
    <div
      className={cn(
        "size-36 rounded-2xl",
        isLoading && "flex items-center justify-center bg-accent-dark",
      )}
    >
      {isLoading && <Spinner />}
      {isSuccess && (
        <img
          src={`/uploads/temp/product-images/${imgName}`}
          alt="Uploaded image"
          className="size-full rounded-2xl object-cover"
        />
      )}
    </div>
  );
};
export default ImageViewer;
