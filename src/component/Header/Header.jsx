import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import burgerMenuIcon from "../../assets/burgerMenu.svg";
import BurgerMenu from "./BurgerMenu";
const Header = () => {
    let [burgerState, setBurgerState] = useState(false);
    return (
        <div>
            <div className="content flex justify-between h-20 items-center relative">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className="hidden md:flex">
                        <li>Блок 1</li>
                        <li className="ml-6">Блок 2</li>
                        <li className="ml-6">Блок 3</li>
                        <li className="ml-6">Блок 4</li>
                    </ul>
                </div>
                <div>
                    <button className="hidden md:block w-40 h-10 text-sky-500 text-xs border-inherit rounded-md border-2 border-sky-500">
                        Кнопка призыва
                    </button>
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
    );
};

export default Header;
