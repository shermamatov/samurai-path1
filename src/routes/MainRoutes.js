import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const MainRoutes = () => {
    const userRoutes = [
        { link: "/", element: <Home />, id: 1 },
        { link: "/product/:name/:id", element: <ProductDetailsPage />, id: 2 },
    ];
    return (
        <>
            <Routes>
                {userRoutes.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </>
    );
};

export default MainRoutes;
