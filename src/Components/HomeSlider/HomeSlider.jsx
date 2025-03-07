import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeSlider = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Show 3 slides
        autoplay={{
          delay: 2000, // Auto-slide every 3 seconds
          disableOnInteraction: false, // Keeps autoplay working even when user interacts
        }}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile: 1 slide
          640: { slidesPerView: 2 }, // Tablet: 2 slides
          1024: { slidesPerView: 3 }, // Desktop: 3 slides
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Added Autoplay module
        className="w-full max-w-7xl h-[600px]"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <SwiperSlide key={index} className="relative flex justify-center">
            <img
              src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
              alt={`Nature ${index + 1}`}
              className="rounded-2xl shadow-lg object-cover w-[500px] h-[600px]"
              loading="lazy"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition">
              Click Me
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
