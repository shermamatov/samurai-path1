import React, { useState } from "react";
const ReviewsModal = ({ setReviewsModal }) => {
    let [ratingState, setRatingState] = useState(0);
    return (
        <div
            onClick={() => setReviewsModal(false)}
            className="fixed backdrop-blur-sm top-0 bottom-0 right-0 left-0 flex justify-center items-center z-20"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] max-w-[520px] bg-neutral-800 flex flex-col py-8 rounded-lg"
            >
                <div className="flex justify-center w-full">
                    {/* <div className="text-xs flex items-center"> */}
                    <div className="flex flex-row">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-10 w-10 cursor-pointer ${
                                ratingState >= 1
                                    ? "text-yellow-400"
                                    : "text-white"
                            } `}
                            onClick={() => setRatingState(1)}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-10 w-10 cursor-pointer ${
                                ratingState >= 2
                                    ? "text-yellow-400"
                                    : "text-white"
                            } `}
                            onClick={() => setRatingState(2)}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-10 w-10 cursor-pointer ${
                                ratingState >= 3
                                    ? "text-yellow-400"
                                    : "text-white"
                            } `}
                            onClick={() => setRatingState(3)}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-10 w-10 cursor-pointer ${
                                ratingState >= 4
                                    ? "text-yellow-400"
                                    : "text-white"
                            } `}
                            onClick={() => setRatingState(4)}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-10 w-10 cursor-pointer ${
                                ratingState >= 5
                                    ? "text-yellow-400"
                                    : "text-white"
                            } `}
                            onClick={() => setRatingState(5)}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                        </svg>
                    </div>
                </div>
                {/* </div> */}
                <div className="mt-8 w-[90%] m-auto">
                    <input
                        className="w-full h-8 rounded-sm pl-2 text-black"
                        placeholder="Имя"
                        type="text"
                    />
                    <textarea
                        className="w-full mt-2 h-32 rounded-sm pl-2 text-black"
                        placeholder="Отзыв"
                        type="text"
                    />
                    <div className="w-full flex justify-end">
                        <button
                            onClick={() => setReviewsModal(false)}
                            className="bg-red-700 mt-2  px-4 py-1 rounded-sm"
                        >
                            назад
                        </button>
                        <button
                            onClick={() => setReviewsModal(false)}
                            className="bg-sky-500 mt-2 ml-2 px-4 py-1 rounded-sm"
                        >
                            опубликовать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsModal;
