/* eslint-disable @typescript-eslint/no-explicit-any */
import RHForm from "@/mycomponents/form/RHForm";
import RHInput from "@/mycomponents/form/RHInput";
import RHSelect from "@/mycomponents/form/RHselect";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"; // Import useForm

import { Input } from "@/components/ui/input";
import {
  brandOptions,
  categoryOptions,
  colorOptions,
  featuresOptions,
  fuelTypeOptions,
  transmissionOptions,
} from "@/constants/Car.constant";
import { useCreateCarMutation } from "@/redux/features/admin/adminApi";
import PageTitle from "@/shared/PageTitle";
import { imageUpload } from "@/utils/uploadImage";
import toast from "react-hot-toast";

const AddCar = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const [createCar, { isLoading, isError }] = useCreateCarMutation();

  const { reset } = useForm();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setImages(selectedFiles);
      setPreviewUrls(selectedFiles.map((file) => URL.createObjectURL(file)));
    }
  };

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Adding car...");
    try {
      const uploadedImageUrls = await imageUpload(images);
      const carData = {
        ...data,
        price: Number(data.price),
        quantity: Number(data.quantity),
        mileage: Number(data.mileage),
        engineCapacity: Number(data.engineCapacity),
        seatingCapacity: Number(data.seatingCapacity),
        rating: Number(data.rating),
        images: uploadedImageUrls,
      };
      const response = await createCar(carData).unwrap();
      if (response?.success || response?.data?.success) {
        toast.success("Car created successfully", { id: toastId });
        reset();
        setImages([]);
        setPreviewUrls([]);
      } else {
        toast.error("Failed to create car.", { id: toastId });
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div className="text-white">Error adding car</div>;
  }

  return (
    <>
      <PageTitle title="Add car" />
      <div className="p-4">
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-6 text-white">Add a New Car</h1>
          <RHForm onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
              <RHInput type="text" name="name" label="Car Name" required />

              <RHInput type="text" name="model" label="Car Model" required />

              {/* Image Upload */}
              <div className="col-span-1">
                <label className="font-semibold">Car Images</label>
                <Input
                  name="images"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  required
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {previewUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                  ))}
                </div>
              </div>
              <RHInput type="text" name="description" label="Description" />

              <RHInput type="text" name="year" label="Year" />

              <RHInput type="number" name="price" label="Car Price" required />

              <RHInput
                type="number"
                name="quantity"
                label="Car Quantity"
                required
              />

              <RHInput type="number" name="mileage" label="Mileage" required />

              <RHInput type="text" name="warranty" label="Warranty" required />

              <RHInput type="number" name="rating" label="Rating" required />

              <RHInput
                type="number"
                name="engineCapacity"
                label="Engine Capacity"
                required
              />
              <RHInput
                type="number"
                name="seatingCapacity"
                label="Seating Capacity"
                required
              />
              <RHSelect
                name="brand"
                options={brandOptions}
                label="Brand Name"
              />
              <RHSelect
                name="color"
                options={colorOptions}
                isMulti
                label="Color"
              />

              <RHSelect
                required
                name="category"
                options={categoryOptions}
                label="Car Category"
              />

              <RHSelect
                required
                name="transmission"
                options={transmissionOptions}
                label="Transmission"
              />
              <RHSelect
                required
                name="fuelType"
                options={fuelTypeOptions}
                label="Fuel Type"
              />

              <RHSelect
                required
                name="features"
                options={featuresOptions}
                isMulti
                label="Features"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-md transition-colors ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Creating..." : "Add Car"}
              </button>
            </div>
          </RHForm>
          <div>input:</div>
        </div>
      </div>
    </>
  );
};

export default AddCar;
