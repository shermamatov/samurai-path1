import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div
            className="cursor-pointer"
            onClick={() => navigate(`/product/${item.title}/${item.id}`)}
        >
            <div className="relative">
                <img
                    className="rounded-lg aspect-square object-cover"
                    src={item.cardImg}
                    alt="картинка"
                />
                <div className="absolute top-2 left-2 right-2 flex justify-between">
                    <div
                        className={`rounded-md flex justify-center items-center w-[40%] h-4 mob:h-6 ${
                            item.have ? "bg-sky-500" : "bg-red-500"
                        }`}
                    >
                        <span className="lg:text-sm mob:text-xs text-[8px] ">
                            {item.have ? "в наличии" : "нет в наличии"}
                        </span>
                    </div>
                    {item.discount > 0 && (
                        <div
                            className={`rounded-md flex justify-center items-center w-[40%] h-4 mob:h-6 bg-green-700`}
                        >
                            <span className="lg:text-sm mob:text-xs text-[8px] ">
                                скидка!
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <h3 className="text-lg mob:text-xl mt-2 mob:mt-3">{item.title}</h3>
            <p className="text-[10px] mob:text-xs mt-1 mob:mt-2 mb-1">
                {item.description.slice(0, 150)}...
            </p>
            {item.discount > 0 ? (
                <div className="flex">
                    <p className="text-lg font-semibold text-sky-500 ">
                        {item.discount} сом
                    </p>
                    <p className="text-lg text-gray-400 line-through ml-2">
                        {item.price} сом
                    </p>
                </div>
            ) : (
                <strong className="text-lg font-semibold text-sky-500">
                    {item.price} сом
                </strong>
            )}
        </div>
    );
};

export default ProductCard;
