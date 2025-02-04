import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RHForm from "@/mycomponents/form/RHForm";
import RHInput from "@/mycomponents/form/RHInput";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface UpdateProfileDialogProps {
  user: {
    name: string;
    email: string;
    address: string;
    city: string;
    phone: string;
  };
  onSave: (updatedData: {
    name: string;
    address: string;
    city: string;
    phone: string;
  }) => void;
}

export const UpdateProfileDialog = ({
  user,
  onSave,
}: UpdateProfileDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSave: SubmitHandler<FieldValues> = (data) => {
    onSave({
      name: data?.name || undefined,
      address: data?.address || undefined,
      city: data?.city || undefined,
      phone: data?.phone || undefined,
    });
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Update Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>

          <RHForm onSubmit={handleSave}>
            <RHInput
              type="text"
              name="name"
              label="Name"
              defaultValue={user?.name}
            />
            <RHInput
              type="text"
              name="address"
              label="Address"
              defaultValue={user?.address}
            />
            <RHInput
              type="text"
              name="city"
              label="City"
              defaultValue={user?.city}
            />
            <RHInput
              type="text"
              name="phone"
              label="Phone"
              defaultValue={user?.phone}
            />

            <Button type="submit" className="w-full mt-10">
              Save Changes
            </Button>
          </RHForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};
