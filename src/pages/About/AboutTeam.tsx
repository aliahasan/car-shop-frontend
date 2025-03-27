import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./About.constant";

const AboutTeam = () => {
  // bg-[#18120B]
  return (
    <>
      <motion.section
        className="py-16  "
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl text-white font-bold text-center mb-8"
          variants={fadeInUp}
        >
          Meet Our Team
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div className="text-center" variants={fadeInUp}>
            <img
              src="https://group.mercedes-benz.com/bilder/konzern/tradition/persoenlichkeiten/vorstandsvorsitzende/dieter-zetsche-sw-w800xh0.jpg"
              alt="Team Member"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl text-white font-semibold mt-4">John Doe</h3>
            <p className="text-my-text_clr">CEO & Co-Founder</p>
          </motion.div>
          <motion.div className="text-center" variants={fadeInUp}>
            <img
              src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
              alt="Team Member"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl text-white font-semibold mt-4">
              John Smith
            </h3>
            <p className="text-my-text_clr">COO</p>
          </motion.div>
          <motion.div className="text-center" variants={fadeInUp}>
            <img
              src="https://t3.ftcdn.net/jpg/01/80/80/28/360_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg"
              alt="Team Member"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl text-white font-semibold mt-4">
              David Hussy
            </h3>
            <p className="text-my-text_clr">Fleet Manager</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default AboutTeam;
