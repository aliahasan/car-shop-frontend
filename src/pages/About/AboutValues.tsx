import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./About.constant";
const AboutValues = () => {
  return (
    <div>
      {/* Values & Commitment Section */}
      <motion.section
        className="py-16 bg-[#18120B]"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl text-white font-bold text-center mb-8"
          variants={fadeInUp}
        >
          Values & Commitment
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="text-4xl text-my-btn_clr mb-4">🌟</div>
            <h3 className="text-xl text-white font-semibold mb-2">
              Customer Service
            </h3>
            <p className="text-my-text_clr px-4">
              We are committed to providing exceptional customer service,
              ensuring your rental experience is smooth and enjoyable.
            </p>
          </motion.div>
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="text-4xl text-my-btn_clr mb-4">🌱</div>
            <h3 className="text-xl text-white font-semibold mb-2">
              Sustainability
            </h3>
            <p className="text-my-text_clr px-4">
              We're dedicated to reducing our environmental impact by
              maintaining a fleet of fuel-efficient and electric vehicles.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutValues;
