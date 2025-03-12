// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const MovieSlider = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-[50px]">
            <div className='flex justify-between items-center'>
                <p className='text-white text-2xl font-semibold'>Popular Videos</p>
                <p className='font-semibold text-red-600'>View All</p>
            </div>
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },  // Mobile screens
                    480: { slidesPerView: 2, spaceBetween: 15 },  // Small devices
                    768: { slidesPerView: 3, spaceBetween: 20 },  // Tablets
                    1024: { slidesPerView: 4, spaceBetween: 25 }, // Laptops
                    1280: { slidesPerView: 5, spaceBetween: 30 }, // Large screens
                }}
                centeredSlides={false} // Avoids centering issues
                // pagination={{ type: 'fraction' }}
                navigation={false}
                autoplay={{
                    delay: 3000, // Slide change delay (in ms) - 3 seconds
                    disableOnInteraction: false, // Keeps autoplay running even after user interaction
                }}
                modules={[Autoplay]}
                className="mySwiper mt-10"
            >
                <SwiperSlide className='border-2 rounded-md '>
                    <img className='rounded-md' src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/popular/03.webp" alt="" />
                    <div className='mt-4 text-white p-2'>
                        <p className='text-xl font-semibold'>The Shawshank</p>
                        <p className='font-semibold'>Drama</p>
                        <div className='flex justify-between items-center text-red-600 font-semibold'>
                            <p>Ratings</p>
                            <p>1h : 142 min</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/popular/03.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/popular/03.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/popular/03.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/popular/03.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/popular/03.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/popular/03.webp" alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default MovieSlider;
