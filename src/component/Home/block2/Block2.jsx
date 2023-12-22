import React from "react";
import moneyIcon from "../../../assets/money.svg";
import deliveryIcon from "../../../assets/delivery.svg";
import headphonesIcon from "../../../assets/headphone.svg";
const Block2 = () => {
    return (
        <div className="content pt-12 pb-12">
            <h2 className="text-center text-5xl ">Наши приемущества</h2>
            <div className="grid grid-cols-3 gap-x-6 justify-between text-center mt-12">
                <div className="flex flex-col items-center">
                    <img className="w-16" src={moneyIcon} alt="" />
                    <strong className="text-xl  mt-4 mb-4">
                        Доступные цены
                    </strong>
                    <p className="text-sm">
                        Мы убеждены, что качественный звук должен быть доступен
                        каждому.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-16" src={deliveryIcon} alt="" />
                    <strong className="text-xl  mt-4 mb-4">
                        Быстрая и надежная доставка
                    </strong>
                    <p className="text-sm">
                        Мы ценим ваше время, поэтому предлагаем оперативную и
                        удобную доставку.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-16" src={headphonesIcon} alt="" />
                    <strong className="text-xl  mt-4 mb-4">
                        Эксклюзивные наушники
                    </strong>
                    <p>
                        Уникальный дизайн, первоклассное качество звука и
                        ограниченные выпуски создают неповторимый опыт.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Block2;
