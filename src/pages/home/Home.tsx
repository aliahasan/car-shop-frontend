import Container from "@/shared/Container";
import PageTitle from "@/shared/PageTitle";
import Banner from "./Banner";
import CategorySection from "./Categories";
import Newsletter from "./NewsLetter";
import ReconditionCars from "./Recondition";
import SectionFour from "./section/SectionFour";
import SectionOne from "./section/SectionOne";
import SectionThree from "./section/SectionThree";
import SectionTwo from "./section/SectionTwo";
import ServiceSection from "./service";

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner />
      <Container>
        <CategorySection />
        <SectionFour />
        <SectionTwo />
        <ReconditionCars />
        <ServiceSection />
        <SectionOne />
        <SectionThree />
        <Newsletter />
      </Container>
    </>
  );
};

export default Home;
