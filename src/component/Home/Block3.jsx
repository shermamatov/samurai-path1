import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/reducers/productReducer";

const Block3 = () => {
    let productData = useSelector((item) => item.product.products);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    return (
        <div className="relative">
            <div className="content pt-8 mob:pt-20 pb-20">
                <h2 className="text-center text-3xl sm:text-5xl">
                    Наши товары
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mob:mt-16">
                    {productData.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
                <button className="font-semibold m-auto mt-10 flex items-center justify-center w-40 h-10 text-sky-500 text-xs border-inherit rounded-md border-2 border-sky-500">
                    перейти в каталог
                </button>
            </div>
        </div>
    );
};

export default Block3;
