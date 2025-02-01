import SectionTitle from "@/shared/SectionTitle";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section>
        <div className="relative h-64 lg:h-[70vh]">
          <img
            src="https://i.ibb.co.com/DfB48LHY/about-us.jpg"
            alt="about-us"
            className="w-full h-full object-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <motion.div
            className="absolute bottom-8 lg:bottom-32 left-[5rem] text-white"
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

      {/* Founding History Section */}
      <motion.section
        className="py-4 lg:py-12 px-4 lg:px-32"
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
              RideHaven was founded in 1965 with a vision to revolutionize the
              car selling industry. Our founders, John Doe and Jane Smith,
              wanted to create a platform that offers transparency, reliability,
              and exceptional customer service.
            </p>
            <p className="text-my-text_clr md:tex-lg">
              Over the years, we have grown into one of the most trusted names
              in the automotive industry, serving thousands of customers
              nationwide.
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

      {/* Team Section */}
      <motion.section
        className="py-16 px-4 lg:px-32 bg-[#18120B]"
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
              src={`https://group.mercedes-benz.com/bilder/konzern/tradition/persoenlichkeiten/vorstandsvorsitzende/dieter-zetsche-sw-w800xh0.jpg`}
              alt={`Team Member`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl text-my-btn_clr font-semibold mt-4">
              John Doe
            </h3>
            <p className="text-my-text_clr">CEO & Co-Founder</p>
          </motion.div>
          <motion.div className="text-center" variants={fadeInUp}>
            <img
              src={`https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png`}
              alt={`Team Member`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl text-my-btn_clr font-semibold mt-4">
              John Smith
            </h3>
            <p className="text-my-text_clr">COO</p>
          </motion.div>
          <motion.div className="text-center" variants={fadeInUp}>
            <img
              src={`https://t3.ftcdn.net/jpg/01/80/80/28/360_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg`}
              alt={`Team Member`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl text-my-btn_clr font-semibold mt-4">
              David Hussy
            </h3>
            <p className="text-my-text_clr">Fleet Manager</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Our Fleet Section */}
      <motion.section
        className="py-16 px-4 lg:px-32"
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

      {/* Values & Commitment Section */}
      <motion.section
        className="py-16 px-4 lg:px-32 bg-[#18120B]"
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
            <p className="text-my-text_clr">
              We are committed to providing exceptional customer service,
              ensuring your rental experience is smooth and enjoyable.
            </p>
          </motion.div>
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="text-4xl text-my-btn_clr mb-4">🌱</div>
            <h3 className="text-xl text-white font-semibold mb-2">
              Sustainability
            </h3>
            <p className="text-my-text_clr">
              We're dedicated to reducing our environmental impact by
              maintaining a fleet of fuel-efficient and electric vehicles.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Us Section */}
      <div className="bg-[#18120B] border-t">
        <motion.section
          className="py-16 px-4 lg:px-32"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-white"
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
              <h3 className="text-xl text-white font-semibold mb-2">Phone</h3>
              <p className="text-my-text_clr">+1 (495) 225-4667</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl text-my-btn_clr mb-4">✉️</div>
              <h3 className="text-xl text-white font-semibold mb-2">Email</h3>
              <p className="text-my-text_clr">info@mngo.com</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl text-my-btn_clr mb-4">📍</div>
              <h3 className="text-xl text-white font-semibold mb-2">Address</h3>
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

export default About;
