import { Link, useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBreadcrumbs, setBreadcrumbs } from "@/features/site/siteSlice";
import { convertToGeorgian } from "@/helpers/translateString";
import { getBreadCrumbs } from "@/data/categories-data";

const Breadcrumbs = () => {
  const { catId, productId, productTitle } = useParams();
  const dispatch = useDispatch();
  const { mainCat, subCat, cat } = useSelector(selectBreadcrumbs);

  useEffect(() => {
    if (catId) {
      const tempBreadCrumbs = getBreadCrumbs(Number(catId));
      dispatch(setBreadcrumbs(tempBreadCrumbs));
    }
  }, [catId, dispatch]);

  return (
    <div className="-mt-2 flex min-h-12 items-center bg-gradient-to-r from-primary-light to-primary pb-2 pt-4 lg:block lg:pt-[20px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link className="underline-offset-2 hover:underline" to="/">
                მთავარი
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {catId ? (
              <BreadcrumbLink asChild>
                <Link
                  className="underline-offset-2 hover:underline"
                  to={"/catalog"}
                >
                  კატალოგი
                </Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>კატალოგი</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {mainCat ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {subCat || cat ? (
                  <BreadcrumbLink asChild>
                    <Link
                      className="underline-offset-2 hover:underline"
                      to={`/catalog/${mainCat.id}/${mainCat.link}`}
                    >
                      {mainCat.name}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{mainCat.name}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </>
          ) : null}
          {subCat ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {cat ? (
                  <BreadcrumbLink asChild>
                    <Link
                      className="underline-offset-2 hover:underline"
                      to={`/catalog/${subCat.id}/${mainCat.link}/${subCat.link}`}
                    >
                      {subCat.name}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{subCat.name}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </>
          ) : null}
          {cat ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {productId ? (
                  <BreadcrumbLink asChild>
                    <Link
                      className="underline-offset-2 hover:underline"
                      to={`/catalog/${cat.id}/${mainCat.link}${subCat.link ? "/" + subCat.link : ""}/${cat.link}`}
                    >
                      {cat.name}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{cat.name}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </>
          ) : null}
          {productTitle ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbPage>{convertToGeorgian(productTitle)}</BreadcrumbPage>
            </>
          ) : null}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
export default Breadcrumbs;
