import { Link, useLocation, useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Fragment } from "react";
import { getBreadCrumbs } from "@/helpers/getBreadCrumbs";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  // console.log(useParams());

  // console.log(pathname);

  const allowedPages = ["/catalog", "/product"];
  const shouldBreadCrumbsRender = allowedPages.some((page) =>
    pathname.includes(page),
  );

  if (!shouldBreadCrumbsRender) return;

  let crumbs = pathname.split("/");

  if (crumbs[1] === "catalog") {
    crumbs = crumbs.filter((str, i) => {
      // remove / and catalog from crumbs list
      if (i > 1) {
        return /\w+/.test(str);
      } else {
        return false;
      }
    });
  } else {
    // if it's not catalog it is product/productId/*
    crumbs = crumbs.filter((str, i) => {
      // remove /, product and productId from crumbs list
      if (i > 2 && i < 7) {
        return /\w+/.test(str);
      } else {
        return false;
      }
    });
  }

  const firstPage = {
    name: "კატალოგი",
    link: "catalog",
  };

  let pages = null;

  if (crumbs.length) {
    pages = getBreadCrumbs(crumbs);
  }

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
            {pages ? (
              <BreadcrumbLink asChild>
                <Link
                  className="underline-offset-2 hover:underline"
                  to={firstPage.link}
                >
                  {firstPage.name}
                </Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{firstPage.name}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {pages &&
            pages.map((page, i) => (
              <Fragment key={page.name + i}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {i === pages.length - 1 ? (
                    <BreadcrumbPage>{page.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        className="underline-offset-2 hover:underline"
                        to={firstPage.link + "/" + page.link}
                      >
                        {page.name}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
export default Breadcrumbs;
