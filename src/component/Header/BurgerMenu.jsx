import React from "react";
import "./Burger.css";
const BurgerMenu = ({ burgerState, setBurgerState }) => {
    return (
        <div>
            <div
                style={{ backgroundColor: "#1F1F1F" }}
                className={`duration-1000 absolute pt-14 p-8 w-[70%] ${
                    burgerState ? "right-0" : "-right-[70%]"
                } top-0 h-[100vh] z-20 text-white`}
            >
                <div className="relative">
                    <button
                        onClick={() => setBurgerState(false)}
                        className="text-5xl absolute -right-2 -top-10"
                    >
                        ×
                    </button>
                    <ul className="text-xl font-medium pt-8">
                        <li>Блок 1</li>
                        <li className="mt-2">Блок 2</li>
                        <li className="mt-2">Блок 3</li>
                        <li className="mt-2">Блок 4</li>
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
