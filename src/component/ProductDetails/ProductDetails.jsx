import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Block4 from "../Home/Block4";
import DetailsSlider from "./DetailsSlider";
import { arr } from "../../const";
import ProductChar from "./ProductChar";
import ProductReveiws from "./ProductReveiws";
import bag from "../../assets/bagAdap.svg";

const ProductDetails = () => {
    let { id } = useParams();
    let [oneProduct, setOneProduct] = useState({});
    function getOneProduct(id) {
        let oneProdArr = arr.find((item) => item.id === parseFloat(id));
        setOneProduct(oneProdArr);
    }
    useEffect(() => {
        getOneProduct(id);
    }, []);
    return (
        <div>
            <div className="content flex flex-col md:flex-row justify-between pt-10 mob:pt-20 pb-10">
                <div className="w-100 md:w-[38%] relative">
                    {/* <img className="rounded-lg" src={oneProduct.img} alt="" /> */}
                    <DetailsSlider />
                    <button
                        className={`z-10 absolute flex justify-center items-center rounded-lg top-1 right-1 mob:top-2 mob:right-2 w-[30%] h-8  ${
                            oneProduct.have ? "bg-sky-500" : "bg-red-500"
                        }`}
                    >
                        <span className="lg:text-sm text-xs">
                            {oneProduct.have ? "в наличии" : "нет в наличии"}
                        </span>
                    </button>
                    {/* <div className="absolute z-10 top-1 right-1 left-1 mob:left-2 mob:top-2 mob:right-2 flex justify-between">
                        <button
                            className={`flex justify-center items-center rounded-lg  w-[30%] h-8  ${
                                oneProduct.have ? "bg-sky-500" : "bg-red-500"
                            }`}
                        >
                            <span className="lg:text-sm text-base">
                                {oneProduct.have
                                    ? "в наличии"
                                    : "нет в наличии"}
                            </span>
                        </button>
                        {oneProduct.discount > 0 && (
                            <button
                                className={`flex justify-center items-center rounded-lg  w-[30%] h-8  bg-green-700`}
                            >
                                <span className="lg:text-sm mob:text-xs text-[8px] ">
                                    скидки!
                                </span>
                            </button>
                        )}
                    </div> */}
                </div>
                <div className="w-[100%] md:w-[58%] flex flex-col justify-center mt-8 md:mt-0">
                    <div>
                        <h1 className="text-4xl mob:text-5xl">
                            {oneProduct.title}
                        </h1>
                        <p className="text-base text-gray-400 mt-8">
                            {oneProduct.bigDesc}
                        </p>
                    </div>
                    <div className="mt-6 flex flex-col">
                        {/* <strong className=" text-2xl text-sky-500">
                            {oneProduct.price}сом
                        </strong> */}
                        {oneProduct.discount > 0 ? (
                            <div className="flex items-end">
                                <p className="text-2xl font-semibold text-sky-500 ">
                                    {oneProduct.discount} сом
                                </p>
                                <p className=" text-gray-400 line-through ml-2">
                                    {oneProduct.price} сом
                                </p>
                            </div>
                        ) : (
                            <strong className="text-2xl text-sky-500">
                                {oneProduct.price} сом
                            </strong>
                        )}
                        <div className="grid grid-cols-3 mob:flex">
                            <button className="bg-sky-500 col-span-2 mob:w-32 h-10 rounded mt-4 text-sm">
                                купить сейчас
                            </button>
                            <button className="bg-[#E80E2B] text-sm ml-2 col-span-1 mob:w-32 h-10 rounded mt-4 flex justify-center items-center">
                                в корзину
                                <img
                                    className="w-5 h-5 ml-1"
                                    src={bag}
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ProductChar item={oneProduct} />
            <ProductReveiws />
        </div>
    );
};

export default ProductDetails;
