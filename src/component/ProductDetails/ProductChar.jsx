import React from "react";

const ProductChar = ({ item }) => {
    return (
        <div className="content flex flex-col pt-10 mob:pt-20 pb-10">
            <h2 className="text-center text-4xl sm:text-5xl">Характеристики</h2>
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-10">
                <div className="w-[100%] md:w-[45%]">
                    <h2 className="text-2xl mob:text-3xl mb-4">
                        {item.charTitle1}
                    </h2>
                    <p className="text-gray-400">{item.charDesc1}</p>
                </div>
                <div className="w-[100%] md:w-[45%] md:mt-0 mt-8">
                    <img className="rounded-xl" src={item.charImg1} alt="" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-16">
                <div className="w-[100%] md:w-[45%]">
                    <img className="rounded-xl" src={item.charImg2} alt="" />
                </div>
                <div className="w-[100%] md:w-[45%] md:mt-0 mt-8">
                    <h2 className="text-2xl mob:text-3xl mb-5">
                        {item.charTitle2}
                    </h2>
                    <p className="text-gray-400">{item.charDesc2}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductChar;
