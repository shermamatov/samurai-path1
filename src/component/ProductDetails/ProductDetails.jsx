import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailsSlider from "./DetailsSlider";
import ProductChar from "./ProductChar";
import ProductReveiws from "./ProductReveiws";
import bag from "../../assets/bagAdap.svg";
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToCart,
    getOneProduct,
} from "../../store/reducers/productReducer";

const ProductDetails = () => {
    let [chekerState, setChekerState] = useState(false);
    let oneProduct = useSelector((item) => item.product.oneProduct);
    let cart = useSelector((item) => item.product.cart);

    let { id } = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    function checkLocalStorage(id) {
        let psevdoCartArr = JSON.parse(localStorage.getItem("cart") || "[]");
        let flag = psevdoCartArr.some((item) => item.id === id);
        setChekerState(flag);
    }

    useEffect(() => {
        dispatch(getOneProduct(id));
    }, []);

    useEffect(() => {
        checkLocalStorage(oneProduct.id);
    }, [cart]);

    return (
        <div>
            <div className="content flex flex-col md:flex-row justify-between pt-10 mob:pt-20 pb-10">
                <div className="w-100 md:w-[38%] relative">
                    {/* <img className="rounded-lg" src={oneProduct.img} alt="картинка" /> */}
                    <DetailsSlider oneProduct={oneProduct} />
                    <button
                        className={`z-10 absolute flex justify-center items-center rounded-lg top-1 right-1 mob:top-2 mob:right-2 w-[30%] h-8  ${
                            oneProduct.have ? "bg-sky-500" : "bg-red-500"
                        }`}
                        onClick={() => navigate(`/edit/${oneProduct.id}`)}
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
                        <p className="mt-6 text-gray-400">
                            тип:
                            <span className="text-sky-500 ml-2 cursor-pointer">
                                {oneProduct.type}
                            </span>
                        </p>
                        <p className="text-gray-400">
                            бренд:
                            <span className="text-sky-500 ml-2 cursor-pointer">
                                {oneProduct.brend}
                            </span>
                        </p>
                        <p className="text-base text-gray-400 mt-2">
                            {oneProduct.description}
                        </p>
                    </div>
                    <div className="mt-6 flex flex-col">
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
                        {oneProduct.have && (
                            <div className="grid grid-cols-3 mob:flex">
                                <button className="bg-sky-500 col-span-3 mob:w-32 h-10 rounded mt-4 text-sm">
                                    купить сейчас
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(
                                            addProductToCart(
                                                oneProduct,
                                                oneProduct.id
                                            )
                                        );
                                        checkLocalStorage(oneProduct.id);
                                    }}
                                    className="bg-[#E80E2B] text-sm mob:ml-2 p-2 col-span-3 rounded mt-4 flex justify-center items-center"
                                >
                                    {chekerState
                                        ? "убрать из корзины"
                                        : "добавить в корзину"}

                                    <img
                                        className="w-5 h-5 ml-1"
                                        src={bag}
                                        alt="картинка"
                                    />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ProductChar item={oneProduct} />
            <ProductReveiws />
        </div>
    );
};

export default ProductDetails;
