import Container from "@/shared/Container";
import PageTitle from "@/shared/PageTitle";
import AboutContact from "./AboutContact";
import AboutFleet from "./AboutFleet";
import AboutHero from "./AboutHero";
import AboutHistory from "./AboutHistory";
import AboutTeam from "./AboutTeam";
import AboutValues from "./AboutValues";

const About = () => {
  return (
    <Container>
      <PageTitle title="About" />
      <section>
        <AboutHero />
        <AboutHistory />
        <AboutTeam />
        <AboutValues />
        <AboutFleet />
        <AboutContact />
      </section>
    </Container>
  );
};

export default About;
