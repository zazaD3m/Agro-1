import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { selectPage, setFilter } from "@/features/filter/filterSlice";
import { scrollToTop } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";

const CatalogPagePagination = ({ totalCount = 20 }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage) || 1;
  const totalPageCount = Math.ceil(totalCount / 10);
  // 10 is product per page

  const handlePageChange = (page) => {
    dispatch(setFilter({ Page: page }));
    scrollToTop();
  };

  const renderPageNumbers = () => {
    const items = [];
    const maxVisiblePages = 5;

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationButton
              onClick={() => {
                handlePageChange(i);
              }}
              isActive={page === i}
            >
              {i}
            </PaginationButton>
          </PaginationItem>,
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationButton
            onClick={() => {
              handlePageChange(1);
            }}
            isActive={page === 1}
          >
            1
          </PaginationButton>
        </PaginationItem>,
      );

      if (page > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPageCount - 1, page + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationButton
              onClick={() => {
                handlePageChange(i);
              }}
              isActive={page === i}
            >
              {i}
            </PaginationButton>
          </PaginationItem>,
        );
      }

      if (page < totalPageCount - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      items.push(
        <PaginationItem key={totalPageCount}>
          <PaginationButton
            onClick={() => {
              handlePageChange(totalPageCount);
            }}
            isActive={page === totalPageCount}
          >
            {totalPageCount}
          </PaginationButton>
        </PaginationItem>,
      );
    }

    return items;
  };

  return (
    <Pagination className="max-w-[500px]">
      <PaginationContent className="max-sm:w-full max-sm:justify-between max-xs:flex-wrap">
        <PaginationItem className="shrink-0 max-xs:order-1">
          <PaginationPrevious
            onClick={() => {
              handlePageChange(Math.max(page - 1, 1));
            }}
            aria-disabled={page === 1}
            tabIndex={page === 1 ? -1 : undefined}
            className={page === 1 && "pointer-events-none opacity-50"}
          />
        </PaginationItem>
        <div className="max-xs:order-0 flex h-11 items-center justify-center gap-2 rounded-md bg-background px-2 shadow-sm max-sm:w-full max-xs:w-full sm:px-5">
          {renderPageNumbers()}
        </div>
        <PaginationItem className="shrink-0 max-xs:order-2">
          <PaginationNext
            onClick={() => {
              handlePageChange(Math.min(page + 1, totalPageCount));
            }}
            aria-disabled={page === totalPageCount}
            tabIndex={page === totalPageCount ? -1 : undefined}
            className={
              page === totalPageCount && "pointer-events-none opacity-50"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default CatalogPagePagination;
