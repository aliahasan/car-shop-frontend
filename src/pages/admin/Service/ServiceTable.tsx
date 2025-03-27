import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IService } from "@/types";

interface IServiceProps {
  services: IService[];
}
const ServiceTable = ({ services }: IServiceProps) => {
  return (
    <Table className="w-full text-my-text_clr  overflow-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services?.map((service: IService) => (
          <TableRow>
            <TableCell>
              <img src={service.image} alt="service-image" className="w-20" />
            </TableCell>
            <TableCell>
              <small>{service.title}</small>
            </TableCell>
            <TableCell>
              <p>{service.author.name}</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ServiceTable;
