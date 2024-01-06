import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import burgerMenuIcon from "../../assets/burgerMenu.svg";
import BurgerMenu from "./BurgerMenu";
import Cart from "../Cart/Cart";
import bag from "../../assets/bag.svg";
import bagAdap from "../../assets/bagAdap.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {
    let [burgerState, setBurgerState] = useState(false);
    let [cartState, setCartState] = useState(false);
    let navigate = useNavigate();
    return (
        <div>
            <div className="content flex justify-between h-20 items-center relative">
                <div className="cursor-pointer" onClick={() => navigate("/")}>
                    <img src={logo} alt="картинка" />
                </div>
                <div>
                    <ul className="hidden md:flex">
                        <li
                            onClick={() => navigate("/")}
                            className="cursor-pointer"
                        >
                            Главная
                        </li>
                        <li
                            onClick={() => navigate("/catalog")}
                            className="ml-6 cursor-pointer"
                        >
                            Каталог
                        </li>
                        <li
                            onClick={() => navigate("/about_us")}
                            className="ml-6 cursor-pointer"
                        >
                            О нас
                        </li>
                        <li
                            onClick={() => navigate("/contact_us")}
                            className="ml-6 cursor-pointer"
                        >
                            Контакты
                        </li>
                        {/* <li className="ml-6 cursor-pointer">Доставка</li> */}
                    </ul>
                </div>
                <div>
                    <button
                        onClick={() => setCartState(true)}
                        className="relative hidden font-semibold md:flex items-center justify-center w-40 h-10 text-sky-500 text-xs border-inherit rounded-md border-2 border-sky-500"
                    >
                        корзина
                        <img
                            className="w-5 h-5 ml-1"
                            src={bag}
                            alt="картинка"
                        />
                        <div className="absolute flex items-center justify-center -top-1 -right-1 rounded-full w-5 h-5 text-white  bg-sky-500">
                            1
                        </div>
                    </button>
                </div>
                <div className="flex items-center md:hidden">
                    <div
                        onClick={() => setCartState(true)}
                        className="relative"
                    >
                        <div className="w-3 right-[10px] top-0 text-[8px] flex justify-center items-center h-3 rounded-full bg-sky-500 absolute">
                            1
                        </div>
                        <img
                            className="w-7 mr-3"
                            src={bagAdap}
                            alt="картинка"
                        />
                    </div>
                    <div className="block md:hidden">
                        <img
                            onClick={() => setBurgerState(true)}
                            className="w-6 block md:hidden"
                            src={burgerMenuIcon}
                            alt="картинка"
                        />
                        <BurgerMenu
                            burgerState={burgerState}
                            setBurgerState={setBurgerState}
                        />
                    </div>
                </div>
            </div>
            {cartState && <Cart setCartState={setCartState} />}
        </div>
    );
};

export default Header;
