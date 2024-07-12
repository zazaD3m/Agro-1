import CatalogPageFilters from "./sections/CatalogPageFilters";
import CatalogPageProducts from "./sections/CatalogPageProducts";
import CatalogPagePagination from "./sections/CatalogPagePagination";
import CatalogFilterStateAndUrlManager from "./components/CatalogFilterStateAndUrlManager";
import CatalogPageFiltersList from "./sections/CatalogPageFiltersList";
import CatalogPageSort from "./components/CatalogPageSort";
import useWindowSize from "@/hooks/useWindowSize";
import CatalogPageFiltersMobile from "./components/CatalogPageFiltersMobile";

const CatalogPage = () => {
  const { width } = useWindowSize();

  const isDesktop = width >= 1024;

  return (
    <>
      <CatalogFilterStateAndUrlManager />
      <div className="bg-accent-dark pt-6">
        <div className="container flex gap-x-4 px-2 sm:px-4">
          {isDesktop && (
            <aside className="h-min w-[220px] shrink-0 rounded-md bg-background pb-12 shadow-md">
              <div className="rounded-t-md bg-accent py-4 shadow-md">
                <h1 className="text-center">ფილტრები</h1>
              </div>
              <CatalogPageFilters />
            </aside>
          )}
          <div>
            <section className="mb-4 flex flex-row-reverse items-center justify-between rounded-md p-1 lg:flex-row lg:bg-background lg:p-0 lg:shadow-sm">
              {isDesktop ? (
                <CatalogPageFiltersList />
              ) : (
                <CatalogPageFiltersMobile />
              )}
              <CatalogPageSort />
            </section>
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
