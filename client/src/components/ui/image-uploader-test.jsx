const handleUpload = async (acceptedFiles) => {
  const freeSpaceForNewImages = 4 - imageData.length;
  const files = acceptedFiles.slice(0, freeSpaceForNewImages);

  // Instead of modifying `newImageData` directly, use a functional update
  setImageData((prevImageData) => {
    const newImageData = [...prevImageData];

    files.forEach(() => {
      newImageData.push({
        isSuccess: false,
        isLoading: true,
        imgName: null,
      });
    });

    // Return the new state
    return newImageData;
  });

  // Now you can proceed with the upload logic
  try {
    const uploadPromises = files.map(async (file, i) => {
      // Your upload logic
    });

    const results = await Promise.allSettled(uploadPromises);
    // Update state again after the uploads are done
    setImageData((prevImageData) => {
      const updatedImageData = [...prevImageData];
      results.forEach((r, i) => {
        if (r.value.isSuccess) {
          const imgIndex = 4 - freeSpaceForNewImages + i;
          updatedImageData[imgIndex] = {
            isLoading: false,
            isSuccess: true,
            imgName: r.value.imgName,
          };
        }
      });
      return updatedImageData.filter((d) => d.isSuccess);
    });
  } catch (error) {
    console.log(error);
  }
};
