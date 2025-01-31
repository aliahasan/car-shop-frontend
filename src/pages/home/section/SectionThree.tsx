import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SectionTitle from "@/shared/SectionTitle";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type TReview = {
  name: string;
  image: string;
  review: string;
};
const SectionThree = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="py-12 lg:py-20">
      <div className="text-center pb-10">
        <SectionTitle
          title="Testimonials"
          heading="What our customers are saying"
        />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {reviews.map((review: TReview, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Card className="w-full flex flex-col justify-between bg-[#0a0a0a] text-white shadow-lg">
              <CardHeader className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={review.image} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-400">⭐⭐⭐⭐⭐</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-my-text_clr text-center">{review.review}</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default SectionThree;
