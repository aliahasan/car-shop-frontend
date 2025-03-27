/* eslint-disable @typescript-eslint/no-explicit-any */
import ImagePreview from "@/components/core/ImaerPreview";
import RHImage from "@/components/core/RHImage";
import { Button } from "@/components/ui/button";
import RHEditor from "@/mycomponents/form/RHEditor";
import RHForm from "@/mycomponents/form/RHForm";
import RHInput from "@/mycomponents/form/RHInput";
import { useCreateServiceMutation } from "@/redux/features/service/serviceApi";
import { imageUpload } from "@/utils/uploadImage";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const AddService = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [createService, { isLoading }] = useCreateServiceMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating blog....");
    try {
      const imagesUrls = await imageUpload(imageFiles);
      const serviceData = {
        ...data,
        image: imagesUrls[0],
      };
      const response = await createService(serviceData).unwrap();
      if (response?.success || response?.data?.success) {
        toast.success(response?.message, { id: toastId });
      } else {
        toast.error("Failed to create service.", { id: toastId });
      }
    } catch (error: any) {
      if (error.data && error.data.message) {
        const errorMessage = error.data.message || "Failed to create service";
        toast.error(errorMessage, { id: toastId });
      } else {
        toast.error("Failed to create service", { id: toastId });
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-auto">
          <RHImage
            setImageFiles={setImageFiles}
            setImagePreview={setImagePreview}
          />
        </div>

        <div className="flex">
          <ImagePreview
            imagePreview={imagePreview}
            setImageFiles={setImageFiles}
            setImagePreview={setImagePreview}
          />
        </div>
      </div>

      {/* Blog Form */}
      <RHForm onSubmit={handleSubmit}>
        <div className="my-6">
          <RHInput
            name="title"
            type="text"
            placeholder="Enter your service title"
            label="Service Title"
            required
          />
        </div>

        <div className="mb-6">
          <RHEditor name="description" label="Description" required />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 mt-4 w-full bg-sky-500 text-white rounded-md"
          >
            Create Service
          </Button>
        </div>
      </RHForm>
    </div>
  );
};
export default AddService;
