import Container from "@/shared/Container";
import PageTitle from "@/shared/PageTitle";
import Banner from "./Banner";
import SectionFour from "./section/SectionFour";
import SectionOne from "./section/SectionOne";
import SectionThree from "./section/SectionThree";
import SectionTwo from "./section/SectionTwo";

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
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
