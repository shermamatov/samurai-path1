import React, { useState } from "react";
import "./Burger.css";
import { useNavigate } from "react-router-dom";
import instagramIcon from "../../assets/instagram.svg";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import logo from "../../assets/Logo.svg";
import close from "../../assets/cancel.svg";
const BurgerMenu = ({ burgerState, setBurgerState }) => {
    let navigate = useNavigate();
    return (
        <div
            onClick={() => setBurgerState(false)}
            className={`fixed backdrop-blur-sm flex justify-end top-0 duration-700 h-[100vh] z-20 w-[100vw] ${
                burgerState ? "right-0" : "-right-[100%]"
            }`}
        >
            {/* <div> */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor: "#1F1F1F" }}
                className={`pt-12 p-8 w-[70%] h-[100vh]  text-white`}
            >
                <div className="relative">
                    <div className="flex justify-end items-center">
                        {/* <div
                            className="cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            <img className="w-20" src={logo} alt="" />
                        </div> */}
                        <button
                            onClick={() => setBurgerState(false)}
                            className=""
                        >
                            <img className="w-6" src={close} alt="картинка" />
                        </button>
                    </div>
                    <ul className="text-xl font-medium pt-6">
                        <li
                            onClick={() => {
                                setBurgerState(false);
                                navigate("/");
                            }}
                        >
                            Главная
                        </li>
                        <li
                            onClick={() => {
                                navigate("/catalog");
                                setBurgerState(false);
                            }}
                            className="mt-2"
                        >
                            Каталог
                        </li>
                        <li
                            onClick={() => {
                                navigate("/about_us");
                                setBurgerState(false);
                            }}
                            className="mt-2"
                        >
                            О нас
                        </li>
                        <li
                            onClick={() => {
                                navigate("contact_us");
                                setBurgerState(false);
                            }}
                            className="mt-2"
                        >
                            Контакты
                        </li>
                        {/* <li className="mt-2">Доставка</li> */}
                    </ul>
                    <div className="flex mt-8 ">
                        <img
                            className="w-8"
                            src={instagramIcon}
                            alt="картинка"
                        />
                        <img
                            className="w-8 ml-2"
                            src={telegramIcon}
                            alt="картинка"
                        />
                        <img
                            className="w-8 ml-2"
                            src={whatsappIcon}
                            alt="картинка"
                        />
                    </div>
                    {/* <button className="w-40 h-10 text-sky-500 text-xs border-inherit rounded-md border-2 border-sky-500 mt-10">
                    Кнопка призыва
                </button> */}
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
