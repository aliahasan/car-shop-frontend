import SectionTitle from "@/shared/SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./About.constant";

const AboutHistory = () => {
  return (
    <motion.section
      className="py-4 lg:py-12 "
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        variants={fadeInUp}
      >
        Our Founding History
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={staggerContainer}
      >
        <motion.div className="space-y-4 md:mt-8" variants={fadeInUp}>
          <SectionTitle title="Founding History" heading="Our History" />

          <p className="text-my-text_clr md:text-lg">
            RideHaven was founded in 1965 with a vision to revolutionize the car
            selling industry. Our founders, John Doe and Jane Smith, wanted to
            create a platform that offers transparency, reliability, and
            exceptional customer service.
          </p>
          <p className="text-my-text_clr md:tex-lg">
            Over the years, we have grown into one of the most trusted names in
            the automotive industry, serving thousands of customers nationwide.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <img
            src="https://i.ibb.co.com/RTbj9Jt0/founding.jpg"
            alt="Founding History"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutHistory;
