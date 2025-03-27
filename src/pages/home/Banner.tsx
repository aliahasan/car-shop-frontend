import Container from "@/shared/Container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container>
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full">
          {/* Image */}
          <img
            className="w-full lg:h-[60vh] object-cover rounded-b"
            src="https://i.ibb.co.com/2Y0nxnnN/car-banner.png"
            alt="Banner"
          />

          <div className="absolute inset-0 bg-black/50 opacity-50 rounded"></div>
        </div>

        {/* Text and Button Container (Desktop View) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex absolute inset-0 flex-col justify-center items-start lg:items-start lg:justify-center lg:px-20 text-white text-center lg:text-left lg:mt-64 z-10"
        >
          {/* Text */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl lg:text-5xl font-bold mb-4"
          >
            Discover Your Dream Car
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg lg:text-xl mb-6"
          >
            Explore the latest models and find the perfect car for you.
          </motion.p>

          {/* Button */}
          <Link to="/all-products">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
            >
              Explore Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Mobile View: Text and Button Below the Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:hidden w-full p-6 text-center relative z-10"
        >
          {/* Text */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl font-bold mb-4 text-primary"
          >
            Discover Your Dream Car
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg mb-6 text-gray-900"
          >
            Explore the latest models and find the perfect car for you. Whether
            you’re looking for luxury, economy, or performance, we have it all.
            Start your journey today!
          </motion.p>

          {/* Button */}
          <Link to="/all-products">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-my-btn_clr hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Explore Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};

export default Banner;
