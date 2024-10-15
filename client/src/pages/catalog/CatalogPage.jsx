import CatalogPageFilters from "./sections/CatalogPageFilters";
import CatalogPageProducts from "./sections/CatalogPageProducts";
import CatalogPagePagination from "./sections/CatalogPagePagination";

import CatalogPageSort from "./components/CatalogPageSort";
import useWindowSize from "@/hooks/useWindowSize";
import CatalogPageFiltersMobile from "./components/CatalogPageFiltersMobile";
import CatalogPageFiltersSync from "./components/CatalogPageFiltersSync";
import CatalogPageFiltersListDesktop from "./components/CatalogPageFiltersListDesktop";
import CatalogPageFiltersListMobile from "./components/CatalogPageFiltersListMobile";
import CatalogPageViewType from "./components/CatalogPageViewType";

const CatalogPage = () => {
  const { isDesktop, isMobile } = useWindowSize();

  return (
    <>
      <CatalogPageFiltersSync />
      <div className="bg-accent-dark pt-4 lg:pt-6">
        <div className="container flex gap-x-4 px-2 sm:px-4">
          {isDesktop && (
            <aside className="mb-32 h-min w-[220px] shrink-0 rounded-md bg-background pb-12 shadow-md">
              <div className="rounded-t-md bg-accent py-4 shadow-md">
                <h1 className="text-center">ფილტრები</h1>
              </div>
              <CatalogPageFilters />
            </aside>
          )}
          <div className="w-full">
            <section className="mb-4 flex flex-row-reverse items-center justify-between rounded-md px-1 lg:flex-row lg:bg-background lg:p-0 lg:shadow-sm">
              {isDesktop ? (
                <CatalogPageFiltersListDesktop />
              ) : (
                <>
                  <CatalogPageViewType isDesktop={isDesktop} />
                  <CatalogPageFiltersMobile />
                </>
              )}
              <CatalogPageSort />
              {isDesktop && <CatalogPageViewType isDesktop={isDesktop} />}
            </section>
            {isMobile && <CatalogPageFiltersListMobile />}
            <section className="mb-12">
              <CatalogPageProducts />
            </section>
            <section className="mb-32">
              <CatalogPagePagination />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default CatalogPage;
