import React from "react";
import "./Burger.css";
const BurgerMenu = ({ burgerState, setBurgerState }) => {
    return (
        <div
            onClick={() => setBurgerState(false)}
            className={`fixed backdrop-blur-sm flex justify-end top-0 duration-1000 h-[100vh] z-20 w-[100vw] ${
                burgerState ? "right-0" : "-right-[100%]"
            }`}
        >
            {/* <div> */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor: "#1F1F1F" }}
                className={`pt-14 p-8 w-[70%] h-[100vh]  text-white`}
            >
                <div className="relative">
                    <button
                        onClick={() => setBurgerState(false)}
                        className="text-5xl absolute -right-2 -top-10"
                    >
                        ×
                    </button>
                    <ul className="text-xl font-medium pt-8">
                        <li>Главная</li>
                        <li className="mt-2">Каталог</li>
                        <li className="mt-2">О нас</li>
                        <li className="mt-2">Контакты</li>
                        <li className="mt-2">Доставка</li>
                    </ul>
                    {/* <button className="w-40 h-10 text-sky-500 text-xs border-inherit rounded-md border-2 border-sky-500 mt-10">
                    Кнопка призыва
                </button> */}
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
