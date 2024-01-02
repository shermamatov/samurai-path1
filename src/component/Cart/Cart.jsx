import React, { useEffect, useState } from "react";
import "./Cart.scss";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import cancel from "../../assets/cancel.svg";
import deleteIcon from "../../assets/delete.svg";

const Cart = ({ setCartState }) => {
    let [cartSum, setCartSum] = useState(0);
    let [testArr, setTestArr] = useState([
        {
            mainImg:
                "https://thumb.tildacdn.com/stor6563-6234-4534-a236-396166326633/-/resize/720x/-/format/webp/24000648.jpg",
            title: "Major IV",
            price: 100,
            discount: 0,
            have: true,
            id: 1,
            count: 1,
        },
        {
            mainImg:
                "https://thumb.tildacdn.com/stor6564-6435-4532-b262-336636363930/-/resize/720x/-/format/webp/98284051.jpg",
            title: "Minor III",
            price: 100,
            discount: 80,
            id: 2,
            have: true,
            count: 1,
        },
    ]);
    function handleCartSum() {
        let sum = testArr.reduce(
            (a, b) => a.price * a.count + b.price * b.count
        );
        setCartSum(sum);
    }

    function setCounter(id, operation) {
        let psevdoArr = [...testArr];
        for (let i of psevdoArr) {
            if (i.id === id) {
                if (operation === "plus") {
                    i.count++;
                } else if (operation === "minus" && i.count > 1) {
                    i.count--;
                }
            }
        }
        setTestArr(psevdoArr);
    }

    useEffect(() => {
        handleCartSum();
    }, [testArr]);

    return (
        <div
            onClick={() => setCartState(false)}
            className="fixed backdrop-blur-sm top-0 bottom-0 right-0 left-0 flex justify-center items-center z-20"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="master-container"
            >
                <div className="card cart">
                    <div className="flex px-5 border-b border-[#efeff3]">
                        <label className="title">ваша корзина</label>
                        <img
                            className="cursor-pointer"
                            onClick={() => setCartState(false)}
                            src={cancel}
                            alt=""
                        />
                    </div>
                    <div className="products">
                        {testArr.map((item) => (
                            <div key={item.id} className="product">
                                <img
                                    className="w-[60px] h-[60]"
                                    src={item.mainImg}
                                    alt=""
                                />
                                <div>
                                    <span>{item.title}</span>
                                </div>
                                <div className="quantity">
                                    <button
                                        className="w-5 mob:w-[30px] h-5 mob:h-[30px]"
                                        onClick={() =>
                                            setCounter(item.id, "minus")
                                        }
                                    >
                                        <img src={minus} alt="" />
                                    </button>
                                    <label>{item.count}</label>
                                    <button
                                        className="w-5 mob:w-[30px] h-5 mob:h-[30px]"
                                        onClick={() =>
                                            setCounter(item.id, "plus")
                                        }
                                    >
                                        <img src={plus} alt="" />
                                    </button>
                                </div>
                                <label className="price small">
                                    {item.price} сом
                                </label>
                                <img
                                    className="cursor-pointer"
                                    src={deleteIcon}
                                    alt=""
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
                            placeholder="адрес доставки"
                            type="text"
                        />
                        <button className="cart_btn bg-sky-500 text-white">
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
