import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface DeleteCarDialogProps {
  carId: string;
  onDelete: (carId: string) => void;
}

const DeleteCarDialog = ({ carId, onDelete }: DeleteCarDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="destructive">
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this car?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Please confirm if you wish to delete
            this car.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col sm:flex-row justify-end mt-4 gap-2">
          <AlertDialogCancel className="px-4 py-2 border rounded-md text-sm">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onDelete(carId)}
            className="px-4 py-2 bg-red-600 text-white rounded-md text-sm"
          >
            Okay
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCarDialog;
