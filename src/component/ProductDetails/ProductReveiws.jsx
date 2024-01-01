import React, { useState } from "react";
import { arr2 } from "../../const";
import ReveiwsCard from "../ProductCard/ReveiwsCard";
import ReviewsModal from "./ReviewsModal";

const ProductReveiws = () => {
    let [reviewsModal, setReviewsModal] = useState(false);
    return (
        <div className="pt-10 pb-10 relative">
            <h2 className="text-center text-3xl sm:text-5xl mb-5">
                Наши отзывы
            </h2>
            <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 content">
                {arr2.map((item) => (
                    <ReveiwsCard key={item.id} item={item} />
                ))}
                <div
                    onClick={() => setReviewsModal(true)}
                    className="flex sm:flex-col justify-center items-center gap-2 dark:text-white max-w-md w-full p-5 rounded-md mt-4 shadow-md hover:scale-105 hover:duration-150 duration-150 border-8 border-dashed border-neutral-800 cursor-pointer"
                >
                    <h2 className="text-3xl sm:text-5xl opacity-60">+</h2>
                    <h3 className="text-2xl font-bold opacity-60">
                        оставить отзыв
                    </h3>
                </div>
            </div>
            {reviewsModal && <ReviewsModal setReviewsModal={setReviewsModal} />}
        </div>
    );
};

export default ProductReveiws;
