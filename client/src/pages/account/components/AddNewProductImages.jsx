import { useState } from "react";
import ImageViewer from "./ImageViewer";
import { ImageUploader } from "./image-uploader";

const AddNewProductImages = ({ setImages }) => {
  const [imageData, setImageData] = useState([]);
  const [validationErr, setValidationErr] = useState([]);

  const isLoading = imageData.some((data) => data.isLoading) || false;

  return (
    <>
      <h2 className="pb-2 text-base font-medium">
        ფოტოები{" "}
        <span className="text-xs font-light">&#40;მაქსიმუმ 4 ფოტო&#41;</span>
      </h2>
      <div className="relative flex flex-wrap gap-4">
        {imageData.length < 4 && (
          <ImageUploader
            imageData={imageData}
            setImageData={setImageData}
            setImages={setImages}
            setValidationErr={setValidationErr}
            isLoading={isLoading}
          />
        )}
        {imageData.length > 0 &&
          imageData.map((data, i) => (
            <ImageViewer
              isLoading={data.isLoading}
              isSuccess={data.isSuccess}
              imgName={data.imgName}
              id={data.id}
              index={i}
              key={data.id}
              imageData={imageData}
              setImageData={setImageData}
              setImages={setImages}
              numOfImages={imageData.length}
              isUploadLoading={isLoading}
            />
          ))}
      </div>
      {validationErr &&
        validationErr.length > 0 &&
        imageData.length < 4 &&
        validationErr.map((err, i) => (
          <p key={i} className="text-sm text-destructive">
            {`${i + 1}) ${err}`}
          </p>
        ))}
    </>
  );
};
export default AddNewProductImages;
