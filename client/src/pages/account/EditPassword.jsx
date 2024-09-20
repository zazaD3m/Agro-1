import useUserInfo from "@/hooks/useUserInfo";
import UpdatePassword from "./components/UpdatePassword";
import AddPassword from "./components/AddPassword";

const EditPassword = () => {
  const { userInfo } = useUserInfo();

  const isUserAuthLocal = userInfo.loginStrategy.includes("local");

  return isUserAuthLocal ? <UpdatePassword /> : <AddPassword />;
};
export default EditPassword;
