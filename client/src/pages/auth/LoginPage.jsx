import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import LoginForm from "./components/LoginForm";
import GoogleLoginButton from "./components/GoogleLoginButton";
// import FacebookLoginButton from "./components/FacebookLoginButton";

const LoginPage = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold sm:text-4xl">ავტორიზაცია</h1>
      <div className="grid gap-4">
        <LoginForm />
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
      <div className="my-4 text-center text-base">
        <span>არ გაქვს ანგარიში? - </span>
        <Button variant="link" asChild className="p-0">
          <Link to="/auth/register">შექმენი</Link>
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
