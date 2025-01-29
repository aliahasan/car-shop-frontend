import MyButton from "@/shared/MyButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="w-full bg-black text-white py-6 overflow-hidden">
      <div className="px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-10 text-white">
            Experience the Ultimate Drive
          </h1>
          <p className="text-lg mt-4 text-my-text_clr">
            Discover the thrill of driving with our latest high-performance
            vehicles.
          </p>
          <Link to="/all-products">
            <MyButton text="Explore now" />
          </Link>
        </motion.div>

        {/* Right Side - Car Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/Lhc3hfZF/banner2.jpg"
            alt="Car"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
