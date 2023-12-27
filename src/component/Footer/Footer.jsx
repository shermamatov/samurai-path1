import React from "react";
import logo from "../../assets/Logo.svg";
import instagram from "../../assets/instagramIcon.svg";
import telegram from "../../assets/telegramIcon.svg";
import vk from "../../assets/vkIcon.svg";
const Footer = () => {
    return (
        <div className="border-t-2 pt-14 border-gray-500">
            <div className="content flex flex-col justify-center items-center">
                <img src={logo} alt="" />
                <ul className="flex max-w-96 w-[90%] justify-between mt-10">
                    <li>Блок 1</li>
                    <li className="ml-6">Блок 2</li>
                    <li className="ml-6">Блок 3</li>
                    <li className="ml-6">Блок 4</li>
                </ul>
                <div className="flex w-40 justify-between mt-10">
                    <img src={instagram} alt="" />
                    <img src={telegram} alt="" />
                    <img src={vk} alt="" />
                </div>
                <strong className="mt-10">© The Path of the Samurai</strong>
            </div>
        </div>
    );
};

export default Footer;
