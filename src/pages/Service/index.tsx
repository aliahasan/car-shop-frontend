import Loading from "@/mycomponents/layout/Loading";
import { useGetAllServiceQuery } from "@/redux/features/service/serviceApi";
import Container from "@/shared/Container";
import PageTitle from "@/shared/PageTitle";
import { TService } from "@/types";
import ServiceCard from "./ServiceCard";

const ServicePage = () => {
  const { data, isLoading } = useGetAllServiceQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  if (isLoading) {
    return <Loading />;
  }
  const services = data?.data;

  return (
    <div>
      <PageTitle title="Service" />
      <Container>
        <section>
          <div>
            <img
              src="https://i.ibb.co.com/SXjnHcLq/car-blog-banner.jpg"
              alt="blog-image"
              className="w-full lg:h-[60vh] object-cover rounded-b"
            />
          </div>
          <div>
            {services?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 my-20">
                {services?.map((service: TService, index: number) => (
                  <ServiceCard service={service} key={index} />
                ))}
              </div>
            ) : (
              <div className="text-center flex items-center justify-center h-screen">
                <p className="text-red-600 text-xl">No service Found !</p>
              </div>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ServicePage;
