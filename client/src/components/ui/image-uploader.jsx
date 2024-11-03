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

  // { isSuccess: false, isLoading: false, imgName: null },

  const handleUpload = async (acceptedFiles) => {
    console.log(imageData);
    const freeSpaceForNewImages = 4 - imageData.length;
    const files = acceptedFiles.slice(0, freeSpaceForNewImages);
    console.log(files);
    let newImageData = [...imageData];
    // console.log(newImageData);
    files.forEach(() => {
      newImageData.push({
        isSuccess: false,
        isLoading: true,
        imgName: null,
      });
    });
    console.log(newImageData);

    setImageData(newImageData);

    try {
      const uploadPromises = files.map(async (file, i) => {
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
          };
        });
      console.log(newImageData);
      setImageData(newImageData.filter((d) => d.isSuccess));
      setImages(newImageData.map((data) => data.imgName));
    } catch (error) {
      console.log(error);
    }
  };

  const onDropAccepted = useCallback(async (acceptedFiles) => {
    // console.log(acceptedFiles);
    setValidationErr([]);
    //  handleUpload(acceptedFiles);
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
    // err.forEach((e) => {
    //   const errMsg = e.errors[0].code;
    //   if (errMsg === "too-many-files") {
    //     if (!errors.includes("დაშვებულია მაქსმიუმ 4 ფოტო")) {
    //       errors.push("დაშვებულია მაქსმიუმ 4 ფოტო");
    //     }
    //   }
    //   if (errMsg === "file-too-large") {
    //     if (!errors.includes("ფოტო არ უნდა აღემატებოდეს 5 მბ-ს")) {
    //       errors.push("ფოტო არ უნდა აღემატებოდეს 5 მბ-ს");
    //     }
    //   }
    //   if (errMsg === "file-invalid-type") {
    //     if (
    //       !errors.includes(
    //         "დაშვებულია მხოლოდ: jpg, jpeg, png, webp ფორმატის ფოტოები",
    //       )
    //     ) {
    //       errors.push(
    //         "დაშვებულია მხოლოდ: jpg, jpeg, png, webp ფორმატის ფოტოები",
    //       );
    //     }
    //   }
    // });
    console.log({ error: err });
    // if (errors.length < 1) {
    //   setValidationErr(["მოხდა შეცდომა, სცადეთ ხელმეორედ"]);
    // } else {
    //   setValidationErr(errors);
    // }
  }, []);

  const handleErrors = (errors) => {
    console.log(errors);
  };

  const onDrop = async (acceptedFiles, errors) => {
    await handleUpload(acceptedFiles);
    handleErrors(errors);
  };

  const isLoading = imageData.some((data) => data.isLoading) || false;

  const { getRootProps, getInputProps } = useDropzone({
    // onDropRejected,
    // onDropAccepted,
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
