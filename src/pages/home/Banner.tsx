import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Image */}
      <img
        className="w-full lg:h-[70vh] object-cover rounded"
        src="https://i.ibb.co/cf5rWQf/nicecar.jpg"
        alt="Banner"
      />

      {/* Text and Button Container (Desktop View) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden lg:flex absolute inset-0 flex-col justify-center items-start lg:items-start lg:justify-center lg:px-20 text-white text-center lg:text-left lg:mt-32"
      >
        {/* Overlay to make text more visible */}

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl lg:text-6xl font-bold mb-4 z-10"
        >
          Discover Your Dream Car
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg lg:text-xl mb-6 z-10"
        >
          Explore the latest models and find the perfect car for you.
        </motion.p>

        {/* Button */}
        <Link to="/all-products">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 z-10"
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
        className="lg:hidden w-full p-6 text-center"
      >
        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl font-bold mb-4 text-white dark:text-white"
        >
          Discover Your Dream Car
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg mb-6 text-my-text_clr"
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
  );
};

export default Banner;
