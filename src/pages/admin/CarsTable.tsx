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
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onDelete(car._id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CarsTable;
