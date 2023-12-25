import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Block4 from "../Home/Block4";
import DetailsSlider from "./DetailsSlider";
import { arr } from "../../const";
import ProductChar from "./ProductChar";

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
                        <span className="lg:text-sm text-base">
                            {oneProduct.have ? "в наличии" : "нет в наличии"}
                        </span>
                    </button>
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
                        <strong className=" text-2xl text-sky-500">
                            {oneProduct.price}сом
                        </strong>
                        <button className="bg-sky-500 w-[100%] mob:w-32 h-10 rounded mt-4 ">
                            купить
                        </button>
                    </div>
                </div>
            </div>
            <ProductChar item={oneProduct} />
            <Block4 />
        </div>
    );
};

export default ProductDetails;
