import { useEffect, useState } from "react";
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
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch("/sliderImage.json") // Ensure this path is correct and the file is in public/
      .then((res) => res.json())
      .then((data) => setImage(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Show 3 slides
        autoplay={{
          delay: 2000, // Auto-slide every 2 seconds
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 }, // 1 slide on mobile
          768: { slidesPerView: 2 }, // 2 slides on tablets
          1024: { slidesPerView: 3 }, // 3 slides on desktops
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full max-w-7xl h-[600px]"
      >
        {image.length > 0 ? (
          image.map((item) => (
            <SwiperSlide key={item._id} className="relative flex justify-center">
              <img
                src={item.poster}
                alt={`Movie ${item._id}`}
                className="rounded-2xl shadow-lg object-cover w-[500px] h-[600px]"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition">
                Watch Now
              </button>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-white text-xl">Loading...</p>
        )}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
