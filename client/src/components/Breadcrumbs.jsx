import { Link, useLocation, useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetBreadcrumbs,
  selectBreadcrumbs,
  setBreadcrumbs,
} from "@/features/site/siteSlice";
import { convertToGeorgian } from "@/helpers/translateString";
import { getBreadCrumbs } from "@/data/categories-data";
import Seo from "./Seo";

const Breadcrumbs = memo(() => {
  const { pathname } = useLocation();
  const { catId, productId, productTitle } = useParams();
  const dispatch = useDispatch();
  const { mainCat, subCat, cat } = useSelector(selectBreadcrumbs);

  const breadCrumbs = useMemo(() => {
    if (catId) {
      return getBreadCrumbs(Number(catId));
    }
  }, [catId]);

  useEffect(() => {
    if (catId) {
      dispatch(setBreadcrumbs(breadCrumbs));
    } else {
      dispatch(resetBreadcrumbs());
    }
  }, [catId, dispatch]);

  const allowedPagesForBreadCrumbs = ["catalog", "product", "account"];
  const shouldBreadCrumbsRender = allowedPagesForBreadCrumbs.some(
    (page) => pathname.split("/")[1] === page,
  );

  if (!shouldBreadCrumbsRender) return null;

  let accountCurrentPage = null;

  if (pathname.split("/")[1] === "account") {
    const currPage = pathname.split("/")[2];

    if (!currPage) {
      return null;
    } else if (currPage === "my-products") {
      accountCurrentPage = "ჩემი განცხადებები";
    } else if (currPage === "add-new-product") {
      accountCurrentPage = "განცხადების დამატება";
    } else if (currPage === "edit") {
      accountCurrentPage = "ანგარიშის რედაქტირება";
    } else {
      return null;
    }
  }

  const title = catId
    ? `იყიდება ${productTitle ? convertToGeorgian(productTitle) : cat ? cat.name : subCat ? subCat.name : mainCat && mainCat.name}`
    : "აგრო საქონლის კატალოგი";

  return accountCurrentPage ? (
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
            <BreadcrumbPage>{accountCurrentPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ) : (
    <>
      <Seo title={title} />
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
                        to={`/catalog/${cat.id}/${mainCat.link}${subCat?.link ? "/" + subCat.link : ""}/${cat.link}`}
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
                <BreadcrumbPage>
                  {convertToGeorgian(productTitle)}
                </BreadcrumbPage>
              </>
            ) : null}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  );
});

Breadcrumbs.displayName = "Breadcrumbs";
export default Breadcrumbs;
