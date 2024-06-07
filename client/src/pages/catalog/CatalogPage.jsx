import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CatalogPageDetails from "./sections/CatalogPageDetails";
import CatalogPageFilters from "./sections/CatalogPageFilters";
import CatalogPageProducts from "./sections/CatalogPageProducts";
import CatalogPagePagination from "./sections/CatalogPagePagination";

const CatalogPage = () => {
  return (
    <div className="bg-accent-dark px-4 pt-6">
      <section className="container mb-6 h-12 rounded-md bg-background shadow-sm">
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
    </div>
  );
};
export default CatalogPage;
