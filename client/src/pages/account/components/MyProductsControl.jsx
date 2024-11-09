import { FileArchive, Trash2, X } from "lucide-react";

const MyProductsControl = ({ pageActive, selectedIds, handleCloseControl }) => {
  return (
    <div className="fixed bottom-16 left-0 z-50 w-full animate-fadeIn bg-primary lg:bottom-0">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-y-4 p-2 px-2 md:flex-nowrap md:justify-between md:px-4 lg:px-8">
        <div className="order-1 w-1/2 md:w-60">
          <p className="w-min text-nowrap rounded-md bg-primary-light/70 px-3 py-2 text-center text-sm text-white">
            მონიშნულია {selectedIds.length} განცხადება
          </p>
        </div>
        <div className="order-3 grid grid-cols-2 justify-center gap-8 md:order-2">
          <button className="flex flex-col items-center gap-y-1 text-xs text-white">
            <span className="rounded-full bg-primary-light/50 p-2">
              <FileArchive strokeWidth={1.5} className="size-5" />
            </span>
            დაარქივება
          </button>
          <button className="flex flex-col items-center gap-y-1 text-xs text-white">
            <span className="rounded-full bg-primary-light/50 p-2">
              <Trash2 strokeWidth={1.5} className="size-5" />
            </span>
            წაშლა
          </button>
        </div>
        <div className="order-2 flex w-1/2 justify-end md:order-3 md:w-60">
          <button
            onClick={handleCloseControl}
            className="flex items-center justify-center rounded-md border border-white p-1 opacity-65"
          >
            <X className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default MyProductsControl;
