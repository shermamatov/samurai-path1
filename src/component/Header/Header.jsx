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
                <div onClick={() => navigate("/")}>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className="hidden md:flex">
                        <li className="cursor-pointer">Блок 1</li>
                        <li
                            onClick={() => setCartState(true)}
                            className="ml-6 cursor-pointer"
                        >
                            Блок 2
                        </li>
                        <li className="ml-6 cursor-pointer">Блок 3</li>
                        <li className="ml-6 cursor-pointer">Блок 4</li>
                    </ul>
                </div>
                <div>
                    <button
                        onClick={() => setCartState(true)}
                        className="relative hidden font-semibold md:flex items-center justify-center w-40 h-10 text-sky-500 text-xs border-inherit rounded-md border-2 border-sky-500"
                    >
                        корзина
                        <img className="w-5 h-5 ml-1" src={bag} alt="" />
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
                        <img className="mr-3" src={bagAdap} alt="" />
                    </div>
                    <div className="block md:hidden">
                        <img
                            onClick={() => setBurgerState(true)}
                            className="w-5 block md:hidden"
                            src={burgerMenuIcon}
                            alt=""
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
