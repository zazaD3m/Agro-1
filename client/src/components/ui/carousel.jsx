import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );

    const [thumbsRef, thumbsApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        containScroll: "keepSnaps",
        dragFree: true,
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onSelect = React.useCallback(() => {
      if (!api) {
        return;
      }
      if (thumbsApi) {
        const selected = api.selectedScrollSnap();
        setActiveIndex(selected);
        thumbsApi.scrollTo(selected);
      }
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, [api, thumbsApi]);

    const onThumbClick = React.useCallback(
      (index) => {
        if (!api || !thumbsApi) return;
        api.scrollTo(index);
      },
      [api, thumbsApi],
    );

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect();
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          api: api,
          carouselRef,
          thumbsRef,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          onThumbClick,
          activeIndex,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselThumbContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { thumbsRef, orientation } = useCarousel();

    return (
      <div {...props} ref={thumbsRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            `${orientation === "vertical" ? "flex-col" : ""}`,
            className,
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);

CarouselThumbContent.displayName = "CarouselThumbContent";

const CarouselItem = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselThumbItem = React.forwardRef(
  ({ className, index, children, ...props }, ref) => {
    const { activeIndex, onThumbClick, orientation } = useCarousel();
    const isSlideActive = activeIndex === index;
    return (
      <div
        {...props}
        ref={ref}
        onClick={() => onThumbClick(index)}
        className={cn(
          "flex min-w-0 shrink-0 grow-0 basis-1/3 bg-background p-1",
          `${orientation === "vertical" ? "pb-1" : "pr-1"}`,
          className,
        )}
      >
        <div
          className={`relative aspect-square h-20 w-full rounded-md opacity-40 transition-opacity ${
            isSlideActive ? "!opacity-100" : ""
          }`}
        >
          {children}
        </div>
      </div>
    );
  },
);
CarouselThumbItem.displayName = "CarouselThumbItem";

const CarouselPrevious = React.forwardRef(
  (
    { className, variant = "outline", size = "icon", iconProps, ...props },
    ref,
  ) => {
    const { scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute rounded-full",
          // orientation === "horizontal"
          //   ? "-left-12 top-1/2 -translate-y-1/2"
          //   : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ChevronLeft {...iconProps} className="-translate-x-px" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef(
  (
    { className, variant = "outline", size = "icon", iconProps, ...props },
    ref,
  ) => {
    const { scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute rounded-full",
          // orientation === "horizontal"
          //   ? "-right-12 top-1/2 -translate-y-1/2"
          //   : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ChevronRight {...iconProps} className="translate-x-px" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

const CarouselIndicator = React.forwardRef(
  ({ className, index, ...props }, ref) => {
    const { activeIndex, onThumbClick } = useCarousel();
    const isSlideActive = activeIndex === index;
    return (
      <Button
        ref={ref}
        size="icon"
        variant="blank"
        className={cn(
          "size-2 rounded-full bg-white opacity-50 data-[active='true']:opacity-100",
          className,
        )}
        data-active={isSlideActive}
        onClick={() => onThumbClick(index)}
        {...props}
      >
        <span className="sr-only">slide {index + 1} </span>
      </Button>
    );
  },
);

CarouselIndicator.displayName = "CarouselIndicator";

export {
  Carousel,
  CarouselContent,
  CarouselThumbContent,
  CarouselItem,
  CarouselThumbItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicator,
};
