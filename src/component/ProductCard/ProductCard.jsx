import React from "react";

const ProductCard = ({ item }) => {
    return (
        <div className="cursor-pointer">
            <div className="relative">
                <img
                    className="rounded-lg aspect-square object-cover"
                    src={item.img}
                    alt=""
                />
                <div
                    className={`absolute flex justify-center items-center rounded-lg top-1 right-1 mob:top-2 mob:right-2 w-[40%] h-4 mob:h-6 ${
                        item.have ? "bg-sky-500" : "bg-red-500"
                    }`}
                >
                    <span className="lg:text-sm mob:text-xs text-[8px] ">
                        {item.have ? "в наличии" : "нет в наличии"}
                    </span>
                </div>
            </div>
            <h3 className="text-lg mob:text-xl mt-2 mob:mt-3">{item.title}</h3>
            <p className="text-[10px] mob:text-xs mt-1 mob:mt-2 mb-1">
                {item.desc}
            </p>
            <strong className="text-sky-500">{item.price} сом</strong>
        </div>
    );
};

export default ProductCard;
