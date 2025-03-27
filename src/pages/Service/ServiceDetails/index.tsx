import MarkDownText from "@/components/core/MarkDownText";
import Loading from "@/mycomponents/layout/Loading";
import { useGetSingleServiceQuery } from "@/redux/features/service/serviceApi";
import Container from "@/shared/Container";
import { TService } from "@/types";
import { useParams } from "react-router-dom";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const { data: serviceData, isLoading } = useGetSingleServiceQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const service: TService = serviceData?.data;

  if (!service) return <div>car data not found</div>;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <div className="relative lg:h-[60vh]">
        <img
          src={service?.image}
          alt={"service image"}
          className="w-full h-full object-cover bg-center rounded-b"
        />
      </div>
      <div className="my-10 ">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-my-text_clr">
          {service?.title}
        </h2>
      </div>
      <div>
        <MarkDownText text={service?.description} />
      </div>
    </Container>
  );
};

export default ServiceDetailsPage;
