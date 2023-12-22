import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const MainRoutes = () => {
    const userRoutes = [{ link: "/", element: <Home />, id: 1 }];
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
