import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

const ImageViewer = ({ index, isLoading, isSuccess, isHidden, imgName }) => {
  return isHidden ? null : (
    <div
      className={cn(
        "size-36 rounded-2xl",
        isLoading &&
          "flex items-center justify-center outline outline-2 -outline-offset-2 outline-primary",
      )}
    >
      {isLoading && <Spinner />}
      {isSuccess && (
        <img
          src={`http://localhost:8080/uploads/temp/product-images/${imgName}`}
          alt="Uploaded image"
          className="size-full rounded-2xl object-cover"
        />
      )}
    </div>
  );
};
export default ImageViewer;
