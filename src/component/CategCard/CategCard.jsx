import React from "react";
import "./CategCard.scss";
const CategCard = () => {
    return (
        <div className="content pt-20 pb-10">
            <div className="container2 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-stretch">
                <div className="categCard">
                    <img src="https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw116fde54/images/categories/headphones/major-iv/both/usp05-major-iv.jpg?sw=1234&sh=2000&sm=fit" />
                    <h3>Marshall</h3>
                    {/* <p>Card description</p> */}
                </div>
                <div className="categCard">
                    <img src="https://i.pinimg.com/564x/52/ce/99/52ce99b8df2adf77f55ff42f18adc069.jpg" />
                    <h3>AirPods</h3>
                    {/* <p>Card description</p> */}
                </div>
                <div className="categCard">
                    <img src="https://i.pinimg.com/564x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" />
                    <h3>JBL</h3>
                    {/* <p>Card description</p> */}
                </div>
                {/* <div className="categCard">
                    <img src="https://images.unsplash.com/photo-1533756972958-d6f38a9761e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d710493bc1818842db8ce47f887708f2&auto=format&fit=crop&w=2089&q=80" />
                    <h3>Card title</h3>
                    <p>Card description</p>
                </div> */}
            </div>
        </div>
    );
};

export default CategCard;
