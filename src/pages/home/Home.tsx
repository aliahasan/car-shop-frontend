import Container from "@/shared/Container";
import Banner from "./Banner";
import SectionOne from "./section/SectionOne";
import SectionThree from "./section/SectionThree";
import SectionTwo from "./section/SectionTwo";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </Container>
    </>
  );
};

export default Home;
