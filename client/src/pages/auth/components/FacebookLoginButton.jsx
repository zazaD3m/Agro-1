import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const FacebookLoginButton = () => {
  return (
    <Button variant="outline" className="w-full rounded px-0">
      <Icons.facebook className="mr-2 size-5 sm:mr-4 sm:size-6" />
      Facebook
    </Button>
  );
};
export default FacebookLoginButton;
