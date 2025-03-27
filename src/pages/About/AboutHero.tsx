import { motion } from "framer-motion";
import { fadeInUp } from "./About.constant";
const AboutHero = () => {
  return (
    <section>
      <div className="relative w-full">
        <img
          src="https://i.ibb.co.com/DfB48LHY/about-us.jpg"
          alt="about-us"
          className="w-full lg:h-[60vh] object-cover bg-center rounded-b"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <motion.div
          className="absolute bottom-8 left-8 lg:bottom-16  lg:left-16 text-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <p className="text-lg mt-2 text-my-btn_clr tracking-[1rem]">
            RideHaven
          </p>
          <h1 className="text-4xl font-bold">About Us</h1>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
