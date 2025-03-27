import { TCar } from "@/types";
import CarCard from "./CarCard";

interface RelatedCarsProps {
  cars: TCar[];
}
const RelatedCars = ({ cars }: RelatedCarsProps) => {
  return (
    <>
      <div>
        <h1 className="text-my-text_clr text-2xl py-5 underline underline-offset-8">
          Related Cars
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {cars?.map((car, idx) => (
          <CarCard car={car} key={idx} />
        ))}
      </div>
    </>
  );
};

export default RelatedCars;
