import React from "react";
import mailIcon from "../assets/mail.svg";
import clockIcon from "../assets/clock.svg";
import phoneIcon from "../assets/phone.svg";
import instagramIcon from "../assets/instagram.svg";
import telegramIcon from "../assets/telegram.svg";
import whatsappIcon from "../assets/whatsapp.svg";
const ContactUs = () => {
    return (
        <div className="content pt-0 md:pt-10 pb-4 ">
            <h1 className="text-center text-4xl mob:text-5xl mb-5">контакты</h1>
            <div className="flex justify-between mt-6 mob:mt-10 md:flex-row flex-col">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center">
                        <img className="w-6 mob:w-8" src={mailIcon} alt="" />
                        <a
                            href="mailto:thepathofthesamurai3@gmail.com"
                            className="ml-4 text-base mob:text-xl"
                        >
                            thepathofthesamurai3@gmail.com
                        </a>
                    </div>
                    <div className="flex items-start  mt-5">
                        <img className="w-6 mob:w-8" src={phoneIcon} alt="" />
                        <div className="flex flex-col justify-start">
                            <a className="ml-4 text-base mob:text-xl" href="#">
                                +996 707 555 555
                            </a>
                            <a
                                className="mt-1 ml-4 text-base mob:text-xl"
                                href="#"
                            >
                                +996 777 777 777
                            </a>
                            <a
                                className="mt-1 ml-4 text-base mob:text-xl"
                                href="#"
                            >
                                +996 700 333 333
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start mt-5">
                        <img className="w-6 mob:w-8" src={clockIcon} alt="" />
                        <p className="ml-4 text-base mob:text-xl">
                            Рабочее время: с 10-00 до 21-00 <br /> Воскресенье:
                            с 10-00 до 17-00
                        </p>
                    </div>
                    <div className="flex mt-6 mob:mt-10">
                        <img className="w-8" src={instagramIcon} alt="" />
                        <img className="w-8 ml-4" src={telegramIcon} alt="" />
                        <img className="w-8 ml-4" src={whatsappIcon} alt="" />
                    </div>
                </div>
                <div className="mt-10 md:mt-0 w-full md:w-[45%]">
                    <iframe
                        className="rounded-md w-[100%] aspect-square"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.864075593939!2d74.60154794924385!3d42.87571299660678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2z0J_Qu9C-0YnQsNC00Ywg0JDQu9CwLdCi0L7Qvg!5e0!3m2!1sru!2skg!4v1704295241890!5m2!1sru!2skg"
                        // width="600"
                        // height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
