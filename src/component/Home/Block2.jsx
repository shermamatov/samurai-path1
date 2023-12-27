import React from "react";
import moneyIcon from "../../assets/money.svg";
import deliveryIcon from "../../assets/delivery.svg";
import headphonesIcon from "../../assets/headphone.svg";
const Block2 = () => {
    return (
        <div className="bg-[#1F1F1F]">
            <div className="content pt-20 pb-20 ">
                <h2 className="text-center text-3xl sm:text-5xl">
                    Наши приемущества
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 lg:justify-between text-center mt-12">
                    <div className="flex justify-center sm:flex-col items-center">
                        <img className="w-14 sm:w-16" src={moneyIcon} alt="" />
                        <div className="text-start sm:text-center ml-5 w-[80%] mt-0 sm:mt-4">
                            <strong className="text-lg sm:text-xl mt-4 mb-4">
                                Доступные цены
                            </strong>
                            <p className="text-xs mt-[4px] sm:text-sm sm:mt-4">
                                Мы убеждены, что качественный звук должен быть
                                доступен каждому.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center sm:flex-col items-center">
                        <img
                            className="w-14 sm:w-16"
                            src={deliveryIcon}
                            alt=""
                        />
                        <div className="text-start sm:text-center ml-5 w-[80%] mt-0 sm:mt-4">
                            <strong className="text-lg sm:text-xl mt-4 mb-4">
                                Быстрая и надежная доставка
                            </strong>
                            <p className="text-xs mt-[4px] sm:text-sm sm:mt-4">
                                Мы ценим ваше время, поэтому предлагаем
                                оперативную и удобную доставку.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center sm:flex-col items-center">
                        <img
                            className="w-14 sm:w-16"
                            src={headphonesIcon}
                            alt=""
                        />
                        <div className="text-start sm:text-center ml-5 w-[80%] mt-0 sm:mt-4">
                            <strong className="text-lg sm:text-xl mt-4 mb-4">
                                Эксклюзивные наушники
                            </strong>
                            <p className="text-xs mt-[4px] sm:text-sm sm:mt-4">
                                Уникальный дизайн, первоклассное качество звука
                                и ограниченные выпуски создают неповторимый
                                опыт.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block2;
