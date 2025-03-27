import Loading from "@/mycomponents/layout/Loading";
import ServiceCard from "@/pages/Service/ServiceCard";
import { useGetAllServiceQuery } from "@/redux/features/service/serviceApi";
import Container from "@/shared/Container";
import SectionTitle from "@/shared/SectionTitle";
import { TService } from "@/types";

const ServiceSection = () => {
  const { data, isLoading } = useGetAllServiceQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  if (isLoading) {
    return <Loading />;
  }
  const services = data?.data;

  return (
    <div className="py-6 lg:py-12">
      <Container>
        <div className="text-center py-10">
          <SectionTitle heading="Our service" title="Our services" />
        </div>
        <section>
          <div>
            {services?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {services?.map((service: TService, index: number) => (
                  <ServiceCard service={service} key={index} />
                ))}
              </div>
            ) : (
              <div className="text-center flex items-center justify-center h-screen">
                <p className="text-red-600 text-xl">No Blog Found !</p>
              </div>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ServiceSection;
