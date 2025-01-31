import images from "@/data/image";
import SectionTitle from "@/shared/SectionTitle";
import Marquee from "react-fast-marquee";

const SectionTwo = () => {
  return (
    <section className="py-10 lg:py-10">
      <div>
        <div className="text-center py-10">
          <SectionTitle title="Popular Brands" heading="Our Popular Brands" />
        </div>
        <Marquee
          direction="right"
          speed={50}
          pauseOnHover={true}
          autoFill={true}
        >
          <div className="flex items-center gap-10 px-10">
            {images.map((image, i) => (
              <div key={i} className="flex-shrink-0">
                <img src={image.src} alt={image.alt} className="w-24 h-auto" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="mt-20">
        <Marquee
          direction="left"
          speed={50}
          pauseOnHover={true}
          autoFill={true}
        >
          <div className="flex items-center gap-10 px-10">
            {images.map((image, i) => (
              <div key={i} className="flex-shrink-0">
                <img src={image.src} alt={image.alt} className="w-24 h-auto" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SectionTwo;
