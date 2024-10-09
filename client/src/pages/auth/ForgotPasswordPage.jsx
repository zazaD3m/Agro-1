import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="flex items-center gap-x-4">
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
        <h1 className="text-xl font-semibold sm:text-2xl">პაროლის აღდგენა</h1>
      </div>
      <p className="py-2">
        შეიყვანეთ ელფოსტა და პაროლის აღდგენის ინსტრუქციას გამოგიგზავნით.
      </p>
      <ForgotPasswordForm />
    </>
  );
};
export default ForgotPasswordPage;
