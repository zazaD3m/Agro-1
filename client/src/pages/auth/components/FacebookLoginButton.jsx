import FullScreenLoader from "@/components/FullScreenLoader";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useVerifyFacebookLoginMutation } from "@/features/auth/authApiSlice";
import { API_URL } from "@/lib/config";
import { useEffect } from "react";

const FacebookLoginButton = () => {
  const [verifyFacebookLogin, { isLoading }] = useVerifyFacebookLoginMutation();

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === API_URL && event.data.token) {
        const { token } = event.data;
        verifyFacebookLogin(token);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginWithFacebook = () => {
    const authWindow = window.open(
      `${API_URL}/api/auth/facebook`,
      "authWindow",
      "toolbar=no, menubar=no, width=600, height=700, top=100, left=100",
    );

    if (window.focus) {
      authWindow.focus();
    }
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <Button
      onClick={loginWithFacebook}
      variant="outline"
      className="w-full rounded px-0"
    >
      <Icons.facebook className="mr-2 size-5 sm:mr-4 sm:size-6" />
      Facebook
    </Button>
  );
};
export default FacebookLoginButton;
