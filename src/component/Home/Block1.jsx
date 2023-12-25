import React from "react";
import banner from "../../assets/homeBanner1.webp";
import bannerAdap from "../../assets/homeBanner1Adap.webp";
const Block1 = () => {
    let width = window.innerWidth;
    return (
        <div
            className="banner_block"
            style={{
                backgroundImage: `url(${width > 768 ? banner : bannerAdap})`,
                backdropFilter: "blur(10px)",
                backgroundAttachment: "fixed",
                backgroundPosition: "start",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="content text-center flex justify-center items-center flex-col h-[85vh]">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-[-120px] sm:mt-0">
                    Бескомпромиссное Звучание
                </h1>
                <p className="mt-5 text-sm sm:text-base w-[80%] sm:w-[60%]">
                    Откройте мир исключительного звука с нашими элитными
                    наушниками. Погрузитесь в качество звучания
                </p>
                <button className="w-40 h-10 mt-5 text-xs border-inherit rounded-md bg-sky-600 text-white">
                    Кнопка призыва
                </button>
            </div>
        </div>
    );
};

export default Block1;