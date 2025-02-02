import axios from "axios";

export const imageUpload = async (images: File[]) => {
  const uploadedImageUrls: string[] = [];

  for (const image of images) {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data?.data?.url) {
        uploadedImageUrls.push(data.data.url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  return uploadedImageUrls;
};
