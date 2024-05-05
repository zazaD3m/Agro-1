import { Link } from "react-router-dom";
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

const Breadcrumbs = ({ pathname }) => {
  const crumbs = pathname.split("/").filter((str) => /\w+/.test(str));
  const parentRouteMapping = {
    catalog: "კატალოგი",
  };

  const firstPage = {
    name: parentRouteMapping[crumbs[0]],
    link: crumbs[0],
  };

  let pages = null;

  if (crumbs.length > 1) {
    pages = getBreadCrumbs(crumbs);
  }

  return (
    <div className="-mt-2 flex min-h-12 items-center bg-gradient-to-r from-primary-light to-primary pb-2 pt-4 lg:block lg:pt-[17px]">
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
