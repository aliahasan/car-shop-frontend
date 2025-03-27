import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { TService } from "@/types";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: TService;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="bg-white text-gray-900 shadow-sm rounded-2xl overflow-hidden border w-full ">
      {/* Image Section */}
      <CardHeader className="p-0">
        <img
          src={service?.image ?? ""}
          alt={service?.title}
          className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
        />
      </CardHeader>

      {/* Content Section */}
      <CardContent className="py-5 px-6 flex flex-col h-[120px]">
        <h3 className="text-lg font-bold">{service?.title}</h3>
      </CardContent>

      {/* Footer Section */}
      <CardFooter className="p-4">
        <Link to={`/service/${service?._id}`}>
          <Button className="w-full text-white font-semibold rounded-full bg-my-btn_clr">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;

// Static data
//   const price = "$99.99";
//   const category = "Car Maintenance";
//   const duration = "2 Hours";
//   const availability = true; // true = Available, false = Unavailable

{
  /* <p className="text-sm text-my-text_clr">Category: {category}</p>
        <p className="text-sm text-my-text_clr">Duration: {duration}</p>
        <p className="text-sm text-my-text_clr">Price: {price}</p> */
}
{
  /* <p
          className={`text-sm font-medium mt-1 ${
            availability ? "text-green-500" : "text-red-500"
          }`}
        >
          {availability ? "Available" : "Unavailable"}
        </p> */
}
