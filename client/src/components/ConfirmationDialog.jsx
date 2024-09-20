import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

const ConfirmationDialog = ({
  showDialog,
  setShowDialog,
  actionFunc,
  title,
  description,
  container,
  variant = "outline",
  type = "button",
  children,
}) => {
  return (
    <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
      <AlertDialogContent container={container}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>დახურვა</AlertDialogCancel>
          {children ? (
            children
          ) : (
            <AlertDialogAction
              variant={variant}
              type={type}
              onClick={() => {
                actionFunc();
              }}
            >
              დადასტურება
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ConfirmationDialog;
