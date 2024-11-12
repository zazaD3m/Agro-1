import { Home } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useEffect } from "react";

const ErrorWrapper = ({ title, desc }) => {
  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-accent-dark">
      <Card className="w-[300px] sm:w-[420px]">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl lg:text-7xl">{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col justify-center gap-2">
          <Button asChild variant="primary">
            <Link to="/">
              <Home className="mr-2 size-5 sm:size-6" />
              მთავარი გვერდი
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ErrorWrapper;
