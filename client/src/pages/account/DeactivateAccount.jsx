import { Form, FormSubmitError } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import {
  useDeleteUserMutation,
  useLogoutMutation,
} from "@/features/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormText from "../auth/components/FormText";
import { LoadingButton } from "@/components/ui/loading-button";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "@/components/ConfirmationDialog";
import { AlertDialogAction } from "@/components/ui/alert-dialog";

const deactivateAccountSchema = yup.object({
  password: yup.string().required("ჩაწერე პაროლი"),
});

const DeactivateAccount = () => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [container, setContainer] = useState(null);
  const navigate = useNavigate();
  const [deleteUser, { isError, error, isLoading, isSuccess }] =
    useDeleteUserMutation();
  const [logout] = useLogoutMutation();
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      password: "",
    },
    resolver: yupResolver(deactivateAccountSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { handleSubmit, control, setError } = form;

  const onSubmit = (data) => {
    setShowDeleteDialog(false);
    deleteUser({
      password: data.password,
    });
  };

  useEffect(() => {
    if (isError) {
      if (error.data.message === "wrong password") {
        setError(
          "password",
          { message: "პაროლი არასწორია!" },
          { shouldFocus: true },
        );
      }
    }
    if (isSuccess) {
      navigate("/");
      toast({
        title: "ანგარიში გაუქმებულია",
      });
      logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} ref={setContainer}>
          <h1 className="pb-4 text-lg">ანგარიშის წასაშლელად შეიყვანე პაროლი</h1>
          <FormText
            control={control}
            name="password"
            label="პაროლი*"
            isLoading={isLoading}
            password={true}
            passwordShowDefault={true}
            className="pb-4"
          />
          <FormSubmitError
            isError={isError && error.data.message !== "wrong password"}
            error="პაროლი არასწორია!"
          />
          <LoadingButton
            variant="primary"
            size="lg"
            className="w-full lg:max-w-64"
            loading={isLoading}
            onClick={(e) => {
              e.preventDefault();
              setShowDeleteDialog(true);
            }}
          >
            ანგარიშის გაუქმება
          </LoadingButton>
          <ConfirmationDialog
            showDialog={showDeleteDialog}
            setShowDialog={setShowDeleteDialog}
            container={container}
            title="დარწმუნებული ხართ რომ გინდათ ანგარიშის გაუქმება?"
            description="ანგარიშთან ერთად წაიშლება თქვენს მიერ განთავსებული ყველა განცხადება"
          >
            <AlertDialogAction type="submit" variant="destructive">
              დადასტურება
            </AlertDialogAction>
          </ConfirmationDialog>
        </form>
      </Form>
    </>
  );
};
export default DeactivateAccount;
