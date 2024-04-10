import { useLogoutMutation } from "@/features/auth/authApiSlice";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [logout] = useLogoutMutation();
  return (
    <div className="flex flex-col gap-16">
      <Button className="text-4xl" onClick={() => logout()}>
        LOGOUT
      </Button>
      <Button className="text-4xl" asChild>
        <Link to="/auth/login">LOGIN</Link>
      </Button>
      <Button className="text-4xl" asChild>
        <Link to="/auth/register">REGISTER</Link>
      </Button>
    </div>
  );
};
export default Header;
