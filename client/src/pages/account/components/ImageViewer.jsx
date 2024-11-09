import { Spinner } from "@/components/ui/spinner";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ImageViewer = ({
  isLoading,
  isSuccess,
  imgName,
  id,
  index,
  imageData,
  setImageData,
  setImages,
  numOfImages,
  isUploadLoading,
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const { width } = useWindowSize();
  const isMobileWidth = width < 1024;
  const canMoveLeft = index !== 0;
  const canMoveRight = imageData?.[index + 1] ? index !== 3 : false;

  useEffect(() => {
    if (isMobileWidth) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      isMobileWidth &&
      divRef.current &&
      !divRef.current.contains(event.target)
    ) {
      setIsFocused(false);
    }
  };
  const handleFocusInside = () => {
    if (isMobileWidth && !isUploadLoading) {
      setIsFocused(true);
    }
  };

  const handleMoveLeft = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);

    const newImageData = [...imageData];

    [newImageData[index - 1], newImageData[index]] = [
      { ...newImageData[index], id: id - 1 },
      { ...newImageData[index - 1], id: id },
    ];

    setImageData(newImageData);
    setImages(newImageData);
  };
  const handleMoveRight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);

    const newImageData = [...imageData];

    [newImageData[index + 1], newImageData[index]] = [
      { ...newImageData[index], id: id + 1 },
      { ...newImageData[index + 1], id: id },
    ];

    setImageData(newImageData);
    setImages(newImageData);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);

    const newImageData = [...imageData]
      .map((data) => {
        if (id > data.id) {
          return data;
        }
        if (id === data.id) {
          return {
            id: null,
          };
        }
        if (id < data.id) {
          return {
            ...data,
            id: data.id - 1,
          };
        }
      })
      .filter((data) => data.id !== null);

    setImageData(newImageData);
    setImages(newImageData);
  };

  return (
    <div
      className={cn(
        "group relative size-36 overflow-hidden rounded-2xl",
        isLoading && "flex items-center justify-center bg-accent-dark",
      )}
      onClick={handleFocusInside}
      ref={divRef}
    >
      {isLoading && <Spinner />}
      {isSuccess && !isUploadLoading && (
        <>
          <div
            className={cn(
              "absolute size-full rounded-2xl transition-all duration-300 lg:group-hover:bg-black/70",
              isFocused && "bg-black/70",
            )}
          />
          <div className="absolute left-0 top-0 flex size-6 items-center justify-center rounded-br-lg bg-accent-dark text-center">
            <span className="text-sm font-medium">{index + 1}</span>
          </div>
          <div
            className={cn(
              "absolute right-2 top-2 hidden justify-end lg:group-hover:flex",
              isFocused && "flex",
            )}
          >
            <button
              className="rounded-xl p-2 transition-all duration-300 max-lg:active:bg-white/25 lg:hover:bg-white/25"
              onClick={handleDelete}
            >
              <Trash2 strokeWidth={2.5} className="size-6 text-white" />
            </button>
          </div>
          {numOfImages > 1 && (
            <div
              className={cn(
                "absolute bottom-4 hidden w-full justify-around lg:group-hover:flex",
                isFocused && "flex",
              )}
            >
              {canMoveLeft && (
                <button
                  className="rounded-xl p-1 transition-all duration-300 max-lg:active:bg-white/25 lg:hover:bg-white/25"
                  onClick={handleMoveLeft}
                >
                  <ChevronLeft
                    strokeWidth={2.5}
                    className="size-8 text-white"
                  />
                </button>
              )}
              {canMoveRight && (
                <button
                  className="rounded-xl p-1 transition-all duration-300 max-lg:active:bg-white/25 lg:hover:bg-white/20"
                  onClick={handleMoveRight}
                >
                  <ChevronRight
                    strokeWidth={2.5}
                    className="size-8 text-white"
                  />
                </button>
              )}
            </div>
          )}
        </>
      )}
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
