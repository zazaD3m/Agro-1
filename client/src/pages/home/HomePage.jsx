import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  selectDesktopCatInfo,
  toggleDesktopCat,
} from "@/features/site/siteSlice";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomePageHero from "./sections/HomePageHero";

const HomePage = () => {
  return (
    <>
      <HomePageHero className="container px-4" />
    </>
  );
};
export default HomePage;
