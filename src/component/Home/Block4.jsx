import React from "react";
import ReveiwsCard from "../ProductCard/ReveiwsCard";
import { arr2 } from "../../const";

const Block4 = () => {
    return (
        <div className="pt-10 pb-10 ">
            <h2 className="text-center text-3xl sm:text-5xl mb-5">
                Наши отзывы
            </h2>
            <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 content">
                {arr2.map((item) => (
                    <ReveiwsCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Block4;
