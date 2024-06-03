import { useState } from "react";
import {
  ImageGalleryCarousel,
  ImageGalleryCarouselContainer,
  ImageGalleryCarouselItem,
  ImageGalleryCarouselNext,
  ImageGalleryCarouselPrevious,
  ImageGalleryThumbContainer,
  ImageGalleryThumbItem,
} from "./ImageGalleryCarousel";
import ImageGalleryZommedIn from "./ImageGalleryZommedIn";

const ImageGallery = ({ images, title }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <ImageGalleryCarousel>
        <div className="relative h-[300px] overflow-hidden rounded-md border md:h-[330px]">
          <ImageGalleryCarouselNext />
          <ImageGalleryCarouselPrevious />
          <ImageGalleryCarouselContainer className="h-full">
            {images.map((img, index) => (
              <ImageGalleryCarouselItem
                key={img + index}
                className="flex size-full items-center justify-center object-cover"
              >
                <div className="flex h-full w-auto items-center justify-center">
                  <img
                    src={"/product_images/" + img}
                    className="h-auto w-full cursor-zoom-in object-contain"
                    onClick={handleShowModal}
                  />
                </div>
              </ImageGalleryCarouselItem>
            ))}
          </ImageGalleryCarouselContainer>
        </div>
        <ImageGalleryThumbContainer>
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
      </ImageGalleryCarousel>
      {showModal && (
        <ImageGalleryZommedIn
          showModal={showModal}
          setShowModal={setShowModal}
          images={images}
          title={title}
        />
      )}
    </>
  );
};
export default ImageGallery;
