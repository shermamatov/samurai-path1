import React, { useEffect, useState } from "react";
import "./Cart.scss";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import cancel from "../../assets/cancelB.svg";
import deleteIcon from "../../assets/delete.svg";
import bagIcon from "../../assets/bagAdap.svg";
// import { setCartLS } from "../../functions";
import { useDispatch, useSelector } from "react-redux";

import {
    deleteFromCart,
    getCart,
    handleCartSum,
    setCartCounter,
} from "../../store/reducers/productReducer";
import { useNavigate } from "react-router-dom";

const Cart = ({ setCartState }) => {
    let cartArr = useSelector((item) => item.product.cart);
    let cartSum = useSelector((item) => item.product.cartSum);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(getCart());
    }, []);

    useEffect(() => {
        dispatch(handleCartSum(cartArr));
    }, [cartArr]);

    return (
        <div
            onClick={() => setCartState(false)}
            className="fixed backdrop-blur-sm top-0 bottom-0 right-0 left-0 flex justify-center items-center z-20"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="master-container"
            >
                {cartArr.length === 0 ? (
                    <div className="card cart text-black">
                        <div className="flex px-5 border-b border-[#efeff3]">
                            <label className="title">ваша корзина</label>
                            <img
                                className="cursor-pointer"
                                onClick={() => setCartState(false)}
                                src={cancel}
                                alt="картинка"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center py-10">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                opacity={0.6}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.4955 12H15.5045"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.49451 12H8.50349"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h2 className="text-xl font-semibold opacity-70">
                                ваша корзина пуста
                            </h2>
                            <button
                                onClick={() => {
                                    navigate("/catalog");
                                    setCartState(false);
                                }}
                                className="mt-4 bg-sky-500 py-1 px-5 rounded-md text-white"
                            >
                                перейти в каталог
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="card cart">
                            <div className="flex px-5 border-b border-[#efeff3]">
                                <label className="title">ваша корзина</label>
                                <img
                                    className="cursor-pointer"
                                    onClick={() => setCartState(false)}
                                    src={cancel}
                                    alt="картинка"
                                />
                            </div>
                            <div className="products">
                                {cartArr?.map((item) => (
                                    <div key={item.id} className="product">
                                        <img
                                            className="w-[60px] h-[60]"
                                            src={item.cardImg}
                                            alt="картинка"
                                        />
                                        <div>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="quantity">
                                            <button
                                                className="w-5 mob:w-[30px] h-5 mob:h-[30px]"
                                                onClick={() =>
                                                    dispatch(
                                                        setCartCounter(
                                                            item.id,
                                                            "minus",
                                                            cartArr
                                                        )
                                                    )
                                                }
                                            >
                                                <img
                                                    src={minus}
                                                    alt="картинка"
                                                />
                                            </button>
                                            <label>{item.count}</label>
                                            <button
                                                className="w-5 mob:w-[30px] h-5 mob:h-[30px]"
                                                onClick={() =>
                                                    dispatch(
                                                        setCartCounter(
                                                            item.id,
                                                            "plus",
                                                            cartArr
                                                        )
                                                    )
                                                }
                                            >
                                                <img
                                                    src={plus}
                                                    alt="картинка"
                                                />
                                            </button>
                                        </div>
                                        <label className="price small">
                                            {item.discount == 0
                                                ? item.price
                                                : item.discount}{" "}
                                            сом
                                        </label>
                                        <img
                                            onClick={() =>
                                                dispatch(
                                                    deleteFromCart(item.id)
                                                )
                                            }
                                            className="cursor-pointer"
                                            src={deleteIcon}
                                            alt="картинка"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="checkout--footer">
                                <label className="price">
                                    <span>итого: </span> {cartSum} сом
                                </label>
                            </div>
                        </div>
                        <div className="card checkout">
                            <label className="title px-5 border-b border-[#efeff3]">
                                ваш заказ
                            </label>
                            <div className="details">
                                <input
                                    className="input_field"
                                    placeholder="ваше имя"
                                    type="text"
                                />
                                <input
                                    className="input_field"
                                    placeholder="ваш номер"
                                    type="text"
                                />
                                <input
                                    className="input_field"
                                    placeholder="дополнительно"
                                    type="text"
                                />
                                <input
                                    className="input_field"
                                    placeholder="адрес доставки"
                                    type="text"
                                />
                                <button className="cart_btn bg-sky-500 text-white">
                                    Оформить заказ
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
