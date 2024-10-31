import { ImageUploader } from "@/components/ui/image-uploader";
import { useUploadProductImageMutation } from "@/features/images/imagesApiSlice";
import { useEffect, useState } from "react";
import ImageViewer from "./ImageViewer";

const AddNewProductImages = ({ images, setImages }) => {
  const [imageData, setImageData] = useState({
    1: { isSuccess: false, isLoading: false, isHidden: true, imgName: null },
    2: { isSuccess: false, isLoading: false, isHidden: true, imgName: null },
    3: { isSuccess: false, isLoading: false, isHidden: true, imgName: null },
    4: { isSuccess: false, isLoading: false, isHidden: true, imgName: null },
  });
  const [validationErr, setValidationErr] = useState([]);

  return (
    <>
      <h2 className="pb-2 text-base font-medium">ფოტოები</h2>
      <div className="flex flex-wrap gap-4 transition-all duration-1000">
        {(!images || images.length !== 4) && (
          <ImageUploader
            imageData={imageData}
            setImageData={setImageData}
            setImages={setImages}
            setValidationErr={setValidationErr}
          />
        )}
        <ImageViewer {...imageData[1]} index={1} />
        <ImageViewer {...imageData[2]} index={2} />
        <ImageViewer {...imageData[3]} index={3} />
        <ImageViewer {...imageData[4]} index={4} />
      </div>
      {validationErr &&
        validationErr.length > 0 &&
        validationErr.map((err, i) => (
          <p key={i} className="text-sm text-destructive">
            {err}
          </p>
        ))}
    </>
  );
};
export default AddNewProductImages;
