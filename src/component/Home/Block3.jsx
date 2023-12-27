import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { arr } from "../../const";

const Block3 = () => {
    return (
        <div className="">
            <div className="content pt-8 mob:pt-20 pb-20">
                <h2 className="text-center text-3xl sm:text-5xl">
                    Наши товары
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mob:mt-16">
                    {arr.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Block3;
