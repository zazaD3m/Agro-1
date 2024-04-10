import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ანგარიშის შექმნა</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <RegisterForm />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                ან
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="outline" className="w-full rounded px-0">
              <Icons.google className="mr-2 size-5 sm:mr-4 sm:size-6" />
              Google
            </Button>
            <Button variant="outline" className="w-full rounded px-0">
              <Icons.facebook className="mr-2 size-5 sm:mr-4 sm:size-6" />
              Facebook
            </Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <span>არსებული ანგარიშით </span>
          <Button variant="link" asChild className="p-0">
            <Link to="/auth/login">შესვლა</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default RegisterPage;
