import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-2", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

const PaginationButton = ({ className, isActive, ...props }) => (
  <button
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex h-7 min-w-7 items-center justify-center rounded-md px-1.5 text-xs font-medium hover:bg-primary-light hover:text-background",
      isActive && "pointer-events-none bg-primary-light text-background",
      className,
    )}
    aria-disabled={isActive}
    {...props}
  />
);
PaginationButton.displayName = "PaginationButton";

const PaginationPrevious = ({ className, ...props }) => (
  <button
    aria-label="Go to previous page"
    className={cn(
      "flex size-11 items-center justify-center rounded-md bg-background shadow-sm",
      className,
    )}
    {...props}
  >
    <ChevronLeft className="size-4 text-primary" />
  </button>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }) => (
  <button
    aria-label="Go to next page"
    className={cn(
      "flex size-11 items-center justify-center rounded-md bg-background shadow-sm",
      className,
    )}
    {...props}
  >
    <ChevronRight className="size-4 text-primary" />
  </button>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden
    className={cn("flex size-6 items-end justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4 opacity-50" />
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
};
