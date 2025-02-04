import MyButton from "@/shared/MyButton";
import SectionTitle from "@/shared/SectionTitle";

const SectionOne = () => {
  return (
    <section className="py-6 lg:py-20">
      <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-10">
        <div>
          <figure>
            <img
              src="https://i.ibb.co.com/Vpc1V7fx/why-choose-us.jpg"
              alt="Why Choose Us"
              className="object-cover rounded  md:max-w-full lg:max-w-[650px]"
            />
          </figure>
        </div>

        <div className="lg:text-left lg:pt-10 lg:pl-10">
          <SectionTitle
            title="Why Choose Our Services"
            heading="Reasons to Choose Us"
          />

          <p className="mt-4 text-my-text_clr text-base">
            We offer a premium car selling experience with a diverse fleet,
            top-notch customer service, and competitive pricing. Our commitment
            to reliability and convenience ensures that every trip with us is
            smooth and stress-free. We prioritize your satisfaction above all
            else, providing personalized service and flexible options to meet
            your unique needs. Experience the difference with us. Let us help
            you find the perfect vehicle to match your lifestyle and budget.
          </p>

          <div className="my-6 flex justify-center md:justify-start">
            <MyButton text="Learn More" />
          </div>

          <div className="border-t flex mt-6 pt-6  md:justify-between space-x-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white">50+</h2>
              <p className="text-sm text-my-text_clr">Car Models</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white">1000+</h2>
              <p className="text-sm text-my-text_clr">Satisfied Customers</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white">24/7</h2>
              <p className="text-sm text-my-text_clr">Support Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
