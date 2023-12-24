import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Block3 = () => {
    let arr = [
        {
            img: "https://thumb.tildacdn.com/stor6563-6234-4534-a236-396166326633/-/resize/720x/-/format/webp/24000648.jpg",
            title: "Major IV",
            price: 100,
            desc: "Major IV – культовые наушники от Marshall с более чем 80 часами беспроводного воспроизведения.",
            id: 1,
            have: true,
        },
        {
            img: "https://thumb.tildacdn.com/stor6564-6435-4532-b262-336636363930/-/resize/720x/-/format/webp/98284051.jpg",
            title: "Minor III",
            price: 100,
            desc: "Познакомьтесь с Minor III и ощутите фирменный звук Marshall без лишнего шума.",
            id: 2,
            have: false,
        },
        {
            img: "https://thumb.tildacdn.com/stor3462-3134-4739-b038-326138366134/-/resize/720x/-/format/webp/66145464.jpg",
            title: "Motif ANC",
            price: 100,
            desc: "Motif ANC - оригинальные беспроводные наушники от Marshall.",
            id: 3,
            have: false,
        },
        {
            img: "https://thumb.tildacdn.com/stor6532-3430-4137-b431-613939373263/-/resize/720x/-/format/webp/72606936.jpg",
            title: "Monitor II ANC",
            price: 100,
            desc: "Усовершенствованная технология активного шумоподавления блокирует шум, позволяя вам сосредоточиться на самом главном – на музыке.",
            id: 4,
            have: false,
        },
        {
            img: "https://thumb.tildacdn.com/stor6537-3739-4030-b330-373762653964/-/resize/720x/-/format/webp/42747362.jpg",
            title: "Mode",
            price: 100,
            desc: "Внутриканальные наушники Marshall Mode обеспечивают мощный звук с минимальными искажениям",
            id: 5,
            have: false,
        },
        {
            img: "https://thumb.tildacdn.com/stor3766-3962-4433-b162-393862646335/-/resize/720x/-/format/webp/82383928.jpg",
            title: "Mode EQ",
            price: 100,
            desc: "Вставные наушники Marshall Mode EQ, оснащенные мини-пультом и микрофоном, позволяют одним нажатием кнопки ответить на звонок.",
            id: 6,
            have: false,
        },
    ];
    return (
        <div className="bg-[#1F1F1F]">
            <div className="content pt-8 mob:pt-20 pb-20">
                <h2 className="text-center text-3xl sm:text-5xl">
                    Наши товары
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mob:mt-16">
                    {arr.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Block3;
