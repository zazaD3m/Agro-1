import { useDropzone } from "react-dropzone";
import { ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUploadProductImageMutation } from "@/features/images/imagesApiSlice";

export const ImageUploader = ({
  imageData,
  setImageData,
  setImages,
  setValidationErr,
  isLoading,
}) => {
  const [uploadImage] = useUploadProductImageMutation();

  const handleUpload = async (acceptedFiles) => {
    const freeSpaceForNewImages = 4 - imageData.length;
    const files = acceptedFiles.slice(0, freeSpaceForNewImages);
    let newImageData = [...imageData];
    files.forEach((_, i) => {
      newImageData.push({
        isSuccess: false,
        isLoading: true,
        imgName: null,
        id: imageData.length + i + 1,
      });
    });
    setImageData(newImageData);

    try {
      const uploadPromises = files.map(async (file) => {
        try {
          const formData = new FormData();
          formData.append("productTempImage", file);

          const response = await uploadImage(formData).unwrap();
          return { isSuccess: true, imgName: response.name };
        } catch (error) {
          return { isSuccess: false, imgName: null };
        }
      });
      const results = await Promise.allSettled(uploadPromises);
      results
        .filter((r) => r.value.isSuccess)
        .map((r) => r.value.imgName)
        .forEach((imgName, i) => {
          const imgIndex = 4 - freeSpaceForNewImages + i;
          newImageData[imgIndex] = {
            isLoading: false,
            isSuccess: true,
            imgName,
            id: newImageData[imgIndex].id,
          };
        });
      newImageData = newImageData.filter((d) => d.isSuccess);
      setImageData(newImageData);
      setImages(newImageData.map((data) => data.imgName));
    } catch (error) {
      setValidationErr(["მოხდა შეცდომა, სცადეთ ხელმეორედ"]);
    }
  };

  const handleErrors = (errors) => {
    let errorMsgs = [];
    errors.forEach((e) => {
      const errMsg = e.errors[0].code;
      if (errMsg === "too-many-files") {
        if (!errorMsgs.includes("დაშვებულია მაქსიმიუმ 4 ფოტო")) {
          errorMsgs.push("დაშვებულია მაქსიმიუმ 4 ფოტო");
        }
      }
      if (errMsg === "file-too-large") {
        if (!errorMsgs.includes("ფოტო არ უნდა აღემატებოდეს 5 მბ-ს")) {
          errorMsgs.push("ფოტო არ უნდა აღემატებოდეს 5 მბ-ს");
        }
      }
      if (errMsg === "file-invalid-type") {
        if (
          !errorMsgs.includes(
            "დაშვებულია მხოლოდ: jpg, jpeg, png, webp ფორმატის ფოტოები",
          )
        ) {
          errorMsgs.push(
            "დაშვებულია მხოლოდ: jpg, jpeg, png, webp ფორმატის ფოტოები",
          );
        }
      }
    });
    if (errorMsgs.length > 0) {
      setValidationErr(errorMsgs);
    } else {
      setValidationErr(["მოხდა შეცდომა, სცადეთ ხელმეორედ"]);
    }
  };

  const onDrop = async (acceptedFiles, errors) => {
    await handleUpload(acceptedFiles);
    if (errors.length > 0) {
      handleErrors(errors);
    } else {
      setValidationErr([]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: 1000 * 1000 * 5,
    accept: {
      "image/png": [],
      "image/jpg": [],
      "image/jpeg": [],
      "image/webp": [],
    },
    disabled: isLoading,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "group flex size-36 cursor-pointer flex-col items-center justify-center gap-y-2 rounded-2xl outline outline-2 -outline-offset-2 outline-primary",
        isLoading && "cursor-not-allowed",
      )}
    >
      <ImagePlus
        strokeWidth={1.5}
        className={cn(
          "size-8 text-primary transition-all group-hover:text-primary-light",
          isDragActive && "text-primary-light",
        )}
      />
      <input {...getInputProps()} />
    </div>
  );
};
