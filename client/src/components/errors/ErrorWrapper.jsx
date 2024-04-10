import { Home, Undo2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ErrorWrapper = ({ title, desc }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-blue-600">
      <Card className="w-[300px] sm:w-[420px]">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl lg:text-7xl">{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col justify-center gap-2">
          <Button asChild className="w-1/2">
            <Link to="/">
              <Home className="mr-2 size-5 sm:size-6" />
              საწყისი გვერდი
            </Link>
          </Button>
          <Button
            className="w-1/2"
            onClick={() => navigate(-1)}
            variant="outline"
          >
            <Undo2 className="mr-2 size-5 sm:size-6" />
            უკან დაბრუნება
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ErrorWrapper;
