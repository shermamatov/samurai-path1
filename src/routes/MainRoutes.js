import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import CatalogPage from "../pages/CatalogPage";
import AddPage from "../pages/AddPage";
import EditPage from "../pages/EditPage";

const MainRoutes = () => {
    const userRoutes = [
        { link: "/", element: <Home />, id: 1 },
        { link: "/about_us", element: <AboutUsPage />, id: 2 },
        { link: "/product/:name/:id", element: <ProductDetailsPage />, id: 3 },
        { link: "/contact_us", element: <ContactUsPage />, id: 4 },
        { link: "/catalog", element: <CatalogPage />, id: 5 },
        { link: "/admin", element: <AddPage />, id: 6 },
        { link: "/edit/:id", element: <EditPage />, id: 7 },
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
