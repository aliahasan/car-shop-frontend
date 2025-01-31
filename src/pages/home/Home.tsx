import Container from "@/shared/Container";
import Banner from "./Banner";
import SectionFour from "./section/SectionFour";
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
        <SectionFour />
        <SectionThree />
      </Container>
    </>
  );
};

export default Home;
