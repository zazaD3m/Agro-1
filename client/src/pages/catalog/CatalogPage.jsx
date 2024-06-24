import CatalogPageDetails from "./sections/CatalogPageDetails";
import CatalogPageFilters from "./sections/CatalogPageFilters";
import CatalogPageProducts from "./sections/CatalogPageProducts";
import CatalogPagePagination from "./sections/CatalogPagePagination";
import CatalogFilterStateAndUrlManager from "./components/CatalogFilterStateAndUrlManager";

const CatalogPage = () => {
  return (
    <>
      <CatalogFilterStateAndUrlManager />
      <div className="bg-accent-dark px-4 pt-6">
        <section className="container mb-6 rounded-md bg-background p-2 shadow-sm">
          <CatalogPageDetails />
        </section>
        <div className="container flex gap-x-4">
          <section className="h-[600px] shrink-0 rounded-md bg-background p-4 shadow-sm">
            <CatalogPageFilters />
          </section>
          <section className="mb-32 grow space-y-12">
            <CatalogPageProducts />
            <CatalogPagePagination />
          </section>
        </div>
        {/* <CatalogPageDetails /> */}
      </div>
    </>
  );
};
export default CatalogPage;
