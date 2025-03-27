import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./About.constant";

const AboutOffer = () => {
  return (
    <div>
      <motion.section
        className="py-16 "
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          variants={fadeInUp}
        >
          Our Fleet
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {[
            "Escarceny",
            "Luxury",
            "SUNs",
            "Versa",
            "Bradle",
            "Sports Care",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border p-6 rounded-lg shadow-lg text-center text-white"
              variants={fadeInUp}
            >
              <div className="text-4xl text-my-btn_clr mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-my-text_clr">
                Explore our range of {item.toLowerCase()} vehicles.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutOffer;
