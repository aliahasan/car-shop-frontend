import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TCar } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import UpdateCarDialog from "./UpdateCar";

// Import shadcn AlertDialog components
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

interface CarsTableProps {
  cars: TCar[];
  onDelete: (carId: string) => void;
}

const CarsTable = ({ cars, onDelete }: CarsTableProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const [selectedCar, setSelectedCar] = useState<TCar | null>(null);

  return (
    <Table className="w-full text-white overflow-x-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars?.map((car) => (
          <TableRow key={car._id}>
            <TableCell>
              <img
                src={car.images[0]}
                alt={car.name}
                className="w-12 h-12 object-cover rounded-md"
              />
            </TableCell>
            <TableCell>{car?.name}</TableCell>
            <TableCell>{car?.brand}</TableCell>
            <TableCell>{car?.model}</TableCell>
            <TableCell>{car?.quantity}</TableCell>
            <TableCell>${car?.price}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" onClick={() => setSelectedCar(car)}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[825px]">
                    {selectedCar && (
                      <UpdateCarDialog
                        closeModal={closeModal}
                        car={selectedCar}
                      />
                    )}
                  </DialogContent>
                </Dialog>

                {/* Delete Button with AlertDialog */}
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
                        This action cannot be undone. Please confirm if you wish
                        to delete this car.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex flex-col sm:flex-row justify-end mt-4 gap-2">
                      <AlertDialogCancel className="px-4 py-2 border rounded-md text-sm">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDelete(car._id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-md text-sm"
                      >
                        Okay
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CarsTable;
