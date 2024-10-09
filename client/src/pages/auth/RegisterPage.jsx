import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import RegisterForm from "./components/RegisterForm";
import GoogleLoginButton from "./components/GoogleLoginButton";
// import FacebookLoginButton from "./components/FacebookLoginButton";

const RegisterPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold sm:text-xl">ანგარიშის შექმნა</h1>
      <div className="grid gap-4">
        <RegisterForm />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">ან</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <GoogleLoginButton />
          {/* <FacebookLoginButton /> */}
        </div>
      </div>
      <div className="mt-4 pb-6 text-center text-base">
        <span>არსებული ანგარიშით - </span>
        <Button variant="link" asChild className="p-0">
          <Link to="/auth/login">შესვლა</Link>
        </Button>
      </div>
    </>
  );
};
export default RegisterPage;
