import CatalogPageFiltersListItems from "../components/CatalogPageFiltersListItems";
import CatalogPageFiltersListReset from "../components/CatalogPageFiltersListReset";

const CatalogPageFiltersListMobile = () => {
  return (
    <div className="flex items-center">
      <>
        <CatalogPageFiltersListReset />
        <div className="w-full overflow-x-auto">
          <div className="flex w-max gap-2">
            <CatalogPageFiltersListItems />
          </div>
        </div>
      </>
    </div>
  );
};
export default CatalogPageFiltersListMobile;
