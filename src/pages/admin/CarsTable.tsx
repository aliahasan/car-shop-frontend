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
import { Pencil } from "lucide-react";
import { useState } from "react";
import DeleteCarDialog from "./DeleteCarDialog";
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
    <Table className="w-full text-my-text_clr overflow-auto">
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
                className="w-16 h-12 object-cover rounded"
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
                  <DialogContent className="max-w-2xl p-0">
                    {" "}
                    {/* Add p-0 to avoid padding */}
                    {selectedCar && (
                      <UpdateCarDialog
                        closeModal={closeModal}
                        car={selectedCar}
                      />
                    )}
                  </DialogContent>
                </Dialog>

                {/* Delete Button with AlertDialog */}
                <DeleteCarDialog carId={car._id} onDelete={onDelete} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CarsTable;
