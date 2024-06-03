import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ImageGalleryCarouselContext = React.createContext(null);

function useImageGalleryCarousel() {
  const context = React.useContext(ImageGalleryCarouselContext);

  if (!context) {
    throw new Error(
      "useImageGalleryCarousel must be used within a <ImageGalleryCarousel />",
    );
  }

  return context;
}

const ImageGalleryCarousel = React.forwardRef(
  ({ opts, plugins, className, children, ...props }, ref) => {
    const [mainRef, mainApi] = useEmblaCarousel(
      {
        axis: "x",
        startIndex: 0,
        ...opts,
      },
      plugins,
    );

    const [thumbRef, thumbApi] = useEmblaCarousel(
      {
        axis: "x",
        containScroll: "keepSnaps",
        dragFree: true,
        ...opts,
      },
      plugins,
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onThumbClick = React.useCallback(
      (index) => {
        if (!mainApi || !thumbApi) return;
        mainApi?.scrollTo(index);
      },
      [mainApi, thumbApi],
    );

    const onSelect = React.useCallback(() => {
      if (!mainApi || !thumbApi) return;

      const selected = mainApi.selectedScrollSnap();
      setActiveIndex(selected);
      thumbApi.scrollTo(selected);

      setCanScrollPrev(mainApi.canScrollPrev());
      setCanScrollNext(mainApi.canScrollNext());
    }, [mainApi, thumbApi]);

    const scrollPrev = React.useCallback(() => {
      if (!mainApi) return;
      mainApi?.scrollPrev();
    }, [mainApi]);

    const scrollNext = React.useCallback(() => {
      if (!mainApi) return;
      mainApi?.scrollNext();
    }, [mainApi]);

    const handleReset = () => {
      setActiveIndex(0);
      mainApi.scrollTo(0, true);
      thumbApi.scrollTo(0, true);
    };

    React.useEffect(() => {
      if (!mainApi) return;

      onSelect();
      mainApi.on("reInit", handleReset);
      mainApi.on("select", onSelect);

      return () => {
        mainApi?.off("select", onSelect);
        mainApi?.off("reInit", handleReset);
      };
    }, [mainApi, onSelect]);

    return (
      <ImageGalleryCarouselContext.Provider
        value={{
          mainRef,
          thumbRef,
          mainApi: mainApi,
          thumbApi: thumbApi,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          activeIndex,
          onThumbClick,
          opts,
        }}
      >
        <div
          ref={ref}
          className={cn("space-y-4", className)}
          aria-roledescription="imageCarousel"
          {...props}
        >
          {children}
        </div>
      </ImageGalleryCarouselContext.Provider>
    );
  },
);
ImageGalleryCarousel.displayName = "ImageGalleryCarousel";

const ImageGalleryCarouselContainer = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { mainRef } = useImageGalleryCarousel();

    return (
      <div ref={mainRef} className="size-full overflow-hidden">
        <div ref={ref} className={cn("-ml-4 flex", className)} {...props}>
          {children}
        </div>
      </div>
    );
  },
);
ImageGalleryCarouselContainer.displayName = "ImageGalleryCarouselContainer";

const ImageGalleryThumbContainer = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { thumbRef } = useImageGalleryCarousel();

    return (
      <div ref={thumbRef} className="overflow-hidden">
        <div ref={ref} className={cn("-ml-2 flex", className)} {...props}>
          {children}
        </div>
      </div>
    );
  },
);
ImageGalleryThumbContainer.displayName = "ImageGalleryThumbContainer";

const ImageGalleryCarouselItem = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
ImageGalleryCarouselItem.displayName = "ImageGalleryCarouselItem";

const ImageGalleryThumbItem = React.forwardRef(
  ({ className, index, children, ...props }, ref) => {
    const { activeIndex, onThumbClick } = useImageGalleryCarousel();
    const isSlideActive = activeIndex === index;

    return (
      <div
        ref={ref}
        onClick={() => onThumbClick(index)}
        className={cn(
          "flex min-w-0 shrink-0 grow pl-2",
          isSlideActive && "",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "size-full cursor-pointer rounded-md border",
            isSlideActive && "border-action",
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);
ImageGalleryThumbItem.displayName = "ImageGalleryThumbItem";

const ImageGalleryCarouselPrevious = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useImageGalleryCarousel();

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn(
          "absolute left-2 top-1/2 z-[50] -translate-y-1/2 rounded-full border bg-background transition-all duration-200 hover:bg-gray-300",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ChevronLeft className="h-5 w-5 pr-0.5" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
ImageGalleryCarouselPrevious.displayName = "ImageGalleryCarouselPrevious";

const ImageGalleryCarouselNext = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useImageGalleryCarousel();

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-2 top-1/2 z-[50] -translate-y-1/2 rounded-full border bg-background transition-all duration-200 hover:bg-gray-300 disabled:opacity-70",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ChevronRight className="h-5 w-5 pl-0.5" />
        <span className="sr-only hidden ">Next slide</span>
      </Button>
    );
  },
);
ImageGalleryCarouselNext.displayName = "ImageGalleryCarouselNext";

export {
  ImageGalleryCarousel,
  ImageGalleryCarouselContainer,
  ImageGalleryThumbContainer,
  ImageGalleryCarouselItem,
  ImageGalleryThumbItem,
  ImageGalleryCarouselPrevious,
  ImageGalleryCarouselNext,
};
