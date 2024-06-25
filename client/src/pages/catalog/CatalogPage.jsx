import CatalogPageFilters from "./sections/CatalogPageFilters";
import CatalogPageProducts from "./sections/CatalogPageProducts";
import CatalogPagePagination from "./sections/CatalogPagePagination";
import CatalogFilterStateAndUrlManager from "./components/CatalogFilterStateAndUrlManager";
import CatalogPageFiltersList from "./components/CatalogPageFiltersList";
import CatalogPageSort from "./components/CatalogPageSort";

const CatalogPage = () => {
  return (
    <>
      <CatalogFilterStateAndUrlManager />
      <div className="bg-accent-dark px-4 pt-6">
        <div className="container flex gap-x-4 px-2 sm:px-4">
          <aside className="h-[600px] shrink-0 rounded-md bg-background p-2 shadow-sm">
            <CatalogPageFilters />
          </aside>
          <div>
            <section className="mb-4 flex items-center justify-between rounded-md bg-background p-2 px-4 shadow-sm">
              <div>
                <CatalogPageFiltersList />
              </div>
              <div>
                <CatalogPageSort />
              </div>
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
