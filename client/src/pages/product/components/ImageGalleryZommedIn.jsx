import { Dialog, DialogContent } from "@/components/ui/dialog";

const ImageGalleryZommedIn = ({ showModal, setShowModal }) => {
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent
        customClose={true}
        className="size-full lg:h-screen lg:max-h-[90vh] lg:w-5/6"
      >
        <div>hello</div>
      </DialogContent>
    </Dialog>
  );
};
export default ImageGalleryZommedIn;
