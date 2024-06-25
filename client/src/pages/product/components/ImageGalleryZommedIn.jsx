import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, X } from "lucide-react";
import {
  ImageGalleryCarousel,
  ImageGalleryCarouselContainer,
  ImageGalleryCarouselItem,
  ImageGalleryCarouselNext,
  ImageGalleryCarouselPrevious,
  ImageGalleryThumbContainer,
  ImageGalleryThumbItem,
} from "./ImageGalleryCarousel";
import { useLayoutEffect } from "react";

const ImageGalleryZommedIn = ({ showModal, setShowModal, title, images }) => {
  useLayoutEffect(() => {
    const handleBackButton = () => {
      console.log("asjldfhlaskjdf");
      setShowModal(false);
    };
    window.addEventListener("popstate", handleBackButton, false);
    return () => {
      window.removeEventListener("popstate", handleBackButton, false);
    };
  }, []);

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent
        customClose={true}
        className="size-full border-0 pt-16 lg:h-[90%] lg:w-5/6 lg:px-4 lg:pb-4 2xl:pb-8"
      >
        <DialogClose className="absolute right-4 top-4 hidden rounded-full bg-accent-dark/50 p-2 transition-opacity hover:bg-accent-dark focus:outline-none lg:block">
          <X strokeWidth="2" className="size-6 text-black" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogClose className="absolute left-4 top-4 flex items-center gap-x-2 rounded-md border border-black p-2 font-semibold lg:hidden">
          <ChevronLeft className="" />
          <span>უკან</span>
        </DialogClose>
        <ImageGalleryCarousel className="flex size-full flex-col gap-2 space-y-0 lg:flex-row">
          <div className="relative grow overflow-hidden lg:w-3/4">
            <ImageGalleryCarouselNext />
            <ImageGalleryCarouselPrevious />
            <ImageGalleryCarouselContainer className="h-full">
              {images.map((img, index) => (
                <ImageGalleryCarouselItem
                  key={img + index}
                  className="flex size-full items-center justify-center object-cover"
                >
                  <div className="size-full">
                    <img
                      src={"/product_images/" + img}
                      className="size-full object-contain"
                    />
                  </div>
                </ImageGalleryCarouselItem>
              ))}
            </ImageGalleryCarouselContainer>
          </div>
          <div className="shrink-0 px-4 pb-12 sm:pb-4 lg:w-1/4 lg:px-0 lg:pb-0">
            <div className="mb-8 hidden border-b border-primary pb-2 lg:block">
              <h2 className="">{title}</h2>
            </div>
            <ImageGalleryThumbContainer className="lg:!transform-none lg:flex-wrap lg:gap-2">
              {images.map((img, index) => (
                <ImageGalleryThumbItem
                  key={img + index}
                  index={index}
                  className="h-16 w-24 max-w-24"
                >
                  <img
                    src={"/product_images/" + img}
                    className="size-full rounded-md object-cover"
                  />
                </ImageGalleryThumbItem>
              ))}
            </ImageGalleryThumbContainer>
          </div>
        </ImageGalleryCarousel>
      </DialogContent>
    </Dialog>
  );
};
export default ImageGalleryZommedIn;
