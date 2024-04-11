import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-x-4">
        <Button
          asChild
          size="icon"
          variant="secondary"
          className="rounded-full"
        >
          <Link to="/auth/login">
            <ChevronLeft />
          </Link>
        </Button>
        <CardTitle className="text-lg sm:text-2xl">პაროლის აღდგენა</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-8 mt-2">
          შეიყვანეთ ელფოსტა და პაროლის აღდგენის ინსტრუქციას გამოგიგზავნით.
        </p>
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  );
};
export default ForgotPasswordPage;
