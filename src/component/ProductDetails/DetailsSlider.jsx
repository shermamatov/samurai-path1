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
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function DetailsSlider() {
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
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {arr.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.mainImg} alt="картинка" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={5}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {arr.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.mainImg} alt="картинка" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
