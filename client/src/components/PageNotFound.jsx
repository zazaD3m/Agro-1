import { Home } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const PageNotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-600">
      <Card className="w-[300px] sm:w-[420px]">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl lg:text-7xl">404</CardTitle>
          <CardDescription>გვერდი არ მოიძებნა.</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link to="/" replace>
              <Home className="mr-2 size-5 sm:size-6" />
              დაბრუნდი
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default PageNotFound;
