import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./About.constant";
const AboutContact = () => {
  return (
    <div>
      <div className="bg-white ">
        <motion.section
          className="py-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-my-text-clr"
            variants={fadeInUp}
          >
            Contact Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl text-my-btn_clr mb-4">📞</div>
              <h3 className="text-xl text-my-text-clr font-semibold mb-2">
                Phone
              </h3>
              <p className="text-my-text_clr">+1 (495) 225-4667</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl text-my-btn_clr mb-4">✉️</div>
              <h3 className="text-xl text-my-text-clr font-semibold mb-2">
                Email
              </h3>
              <p className="text-my-text_clr">info@mngo.com</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl text-my-btn_clr mb-4">📍</div>
              <h3 className="text-xl text-my-text-clr font-semibold mb-2">
                Address
              </h3>
              <p className="text-my-text_clr">
                123 Math St. thesis, Evangelicals
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutContact;
