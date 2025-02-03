/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import RHForm from "@/mycomponents/form/RHForm";
import RHInput from "@/mycomponents/form/RHInput";
import { useUpdateCarMutation } from "@/redux/features/admin/adminApi";
import { TCar } from "@/types";
import { imageUpload } from "@/utils/uploadImage";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface UpdateCarDialogProps {
  car: TCar;
  closeModal: () => void;
}

const UpdateCarDialog = ({ car, closeModal }: UpdateCarDialogProps) => {
  const [updateCarInfo] = useUpdateCarMutation();
  const [images, setImages] = useState<File[]>([]);

  // Handle image file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
      ? Array.from(event.target.files)
      : [];
    setImages(selectedFiles);
  };

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("car is updating...");
    try {
      const updatedImages = [...car.images];
      if (images.length > 0) {
        const uploadedImageUrls = await imageUpload(images);
        updatedImages[0] = uploadedImageUrls[0];
      }

      const updatedData: Partial<TCar> = {
        ...data,
        price: data.price ? Number(data.price) : undefined,
        quantity: data.quantity ? Number(data.quantity) : undefined,
        images: updatedImages,
      };

      const response = await updateCarInfo({
        ...updatedData,
        carId: car._id,
      }).unwrap();
      response;
      if (response.success || response?.data?.success) {
        toast.success("Car updated successfully", { id: toastId });
        closeModal();
      }
    } catch (error: any) {
      if (error.data && error.data.message) {
        const errorMessage = error.data.message || "Failed to create car";
        toast.error(errorMessage, { id: toastId });
      } else {
        toast.error("Failed to create car", { id: toastId });
      }
    }
  };

  return (
    <div className="max-w-3xl bg-white rounded-lg p-6 md:p-8">
      <DialogHeader className="text-center">
        <DialogTitle className="text-xl font-semibold">Update Car</DialogTitle>
        <DialogDescription className="text-gray-600">
          Edit the details of <span className="font-medium">{car.name}</span>
        </DialogDescription>
      </DialogHeader>

      <RHForm onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <RHInput
            type="text"
            name="name"
            label="Name"
            defaultValue={car.name}
          />
          <RHInput
            type="text"
            name="brand"
            label="Brand"
            defaultValue={car.brand}
          />
          <RHInput
            type="number"
            name="price"
            label="Price"
            defaultValue={car.price}
          />
          <RHInput
            type="number"
            name="quantity"
            label="Quantity"
            defaultValue={car.quantity}
          />
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-gray-700">
            Car Images
          </label>
          <Input
            type="file"
            onChange={handleFileChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            multiple
          />
        </div>

        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700"
          >
            Save changes
          </Button>
        </div>
      </RHForm>
    </div>
  );
};

export default UpdateCarDialog;
