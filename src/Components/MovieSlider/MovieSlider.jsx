// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const HomeSlider = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("sliderImage.json")
            .then((res) => res.json())
            .then((data) => setImages(data))
            .catch((error) => console.error("Error fetching images:", error));
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 mt-10">
            {/* Section Title */}
            <div className="flex justify-between items-center text-white mb-6">
                <h2 className="text-2xl font-bold">Popular Videos</h2>
                <p className="text-red-500 cursor-pointer hover:underline">View All</p>
            </div>

            {/* Swiper Slider */}
            {images.length > 0 ? (
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                        480: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
                        768: { slidesPerView: 3, spaceBetween: 15 }, // Small laptops
                        1024: { slidesPerView: 4, spaceBetween: 20 }, // Large screens
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    navigation
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper mt-8 w-full max-w-7xl"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={img.id || index} className="relative">
                            <div className="group relative">
                                <img
                                    src={img.poster || "/default-poster.jpg"}
                                    alt={img.title || `Movie ${index + 1}`}
                                    className="w-full h-80 object-cover rounded-lg transition-transform group-hover:scale-105"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-lg font-semibold text-white">{img.title}</p>
                                    <p className="text-sm text-gray-300">{img.genre}</p>
                                    <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition w-full">
                                        Watch Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev !text-red-600  font-semibold"></div>
                    <div className="swiper-button-next !text-red-600 font-semibold"></div>
                </Swiper>
            ) : (
                <p className="text-gray-300 text-lg text-center mt-6">Loading popular videos...</p>
            )}
        </div>
    );
};

export default HomeSlider;
