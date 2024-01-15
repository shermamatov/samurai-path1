import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./DetailsSlider.css";
import { arr } from "../../const";
// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function DetailsSlider({ oneProduct }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                centeredSlides={true}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {oneProduct?.productImg?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="картинка" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={5}
                slidesPerView={oneProduct?.productImg?.length <= 3 ? 3 : 4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {oneProduct?.productImg?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="картинка" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
