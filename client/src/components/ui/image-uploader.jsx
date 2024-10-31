import { useDropzone } from "react-dropzone";
import { Input } from "./input";
import { ImagePlus } from "lucide-react";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { useUploadProductImageMutation } from "@/features/images/imagesApiSlice";

export const ImageUploader = ({
  imageData,
  setImageData,
  setImages,
  setValidationErr,
}) => {
  const [uploadImage] = useUploadProductImageMutation();

  const handleUpload = async (files) => {
    let imageDataStartIndex = 1;
    for (const p in imageData) {
      if (!imageData[p].imgName) {
        imageDataStartIndex = imageDataStartIndex + 1;
      }
    }
    files = files.filter((_, i) => i + imageDataStartIndex < 5);
    files.forEach((file, i) => {
      setImageData((p) => ({
        ...p,
        [i + imageDataStartIndex]: {
          ...p[i + imageDataStartIndex],
          isLoading: true,
          isHidden: false,
        },
      }));
    });

    try {
      const uploadPromises = files.map(async (file, i) => {
        try {
          const formData = new FormData();
          formData.append("productTempImage", file);

          const response = await uploadImage(formData).unwrap();
          setImageData((p) => ({
            ...p,
            [i + imageDataStartIndex]: {
              ...p[i + imageDataStartIndex],
              isLoading: false,
              isSuccess: true,
              imgName: response.name,
              isHidden: false,
            },
          }));
          return response.name;
        } catch (error) {
          setImageData((p) => ({
            ...p,
            [i + imageDataStartIndex]: {
              ...p[i + imageDataStartIndex],
              isLoading: false,
              isSuccess: false,
              imgName: response.name,
              isHidden: false,
            },
          }));
        }
      });
    } catch (error) {}
  };

  const onDropAccepted = useCallback(async (acceptedFiles) => {
    console.log(acceptedFiles);
    setValidationErr([]);
    await handleUpload(acceptedFiles);
    // try {
    //   const uploadedImages = await Promise.all(
    //     files.map(async (file, i) => {
    //       const newImageFormData = new FormData();
    //       newImageFormData.append("productTempImage", file);
    //       const img = await uploadImage(newImageFormData).unwrap();
    //       return img.name;
    //     }),
    //   );
    //   console.log(uploadedImages);
    //   setImages(uploadedImages);
    // } catch (error) {
    //   console.log(error)
    // }
  }, []);

  const onDropRejected = useCallback((err) => {
    let errors = [];
    err.forEach((e) => {
      const errMsg = e.errors[0].code;
      if (errMsg === "too-many-files") {
        if (!errors.includes("დაშვებულია მაქსმიუმ 4 ფოტო")) {
          errors.push("დაშვებულია მაქსმიუმ 4 ფოტო");
        }
      }
      if (errMsg === "file-too-large") {
        if (!errors.includes("ფოტო არ უნდა აღემატებოდეს 5 მბ-ს")) {
          errors.push("ფოტო არ უნდა აღემატებოდეს 5 მბ-ს");
        }
      }
      if (errMsg === "file-invalid-type") {
        if (
          !errors.includes(
            "დაშვებულია მხოლოდ: jpg, jpeg, png, webp ფორმატის ფოტოები",
          )
        ) {
          errors.push(
            "დაშვებულია მხოლოდ: jpg, jpeg, png, webp ფორმატის ფოტოები",
          );
        }
      }
    });
    console.log(errors);
    if (errors.length < 1) {
      setValidationErr(["მოხდა შეცდომა, სცადეთ ხელმეორედ"]);
    } else {
      setValidationErr(errors);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDropRejected,
    onDropAccepted,
    maxFiles: 4,
    multiple: true,
    maxSize: 1000 * 1000 * 2,
    accept: {
      "image/png": [],
      "image/jpg": [],
      "image/jpeg": [],
      "image/webp": [],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "group flex size-36 cursor-pointer flex-col items-center justify-center gap-y-2 rounded-2xl outline outline-2 -outline-offset-2 outline-primary",
        // isLoading && "cursor-not-allowed",
      )}
    >
      {/* {isLoading ? ( */}
      {/* <Spinner /> */}
      {/* ) : ( */}
      <ImagePlus
        strokeWidth={1.5}
        className="size-8 text-primary transition-all group-hover:text-primary-light"
      />
      {/* )} */}
      <input {...getInputProps()} />
    </div>
  );
};
