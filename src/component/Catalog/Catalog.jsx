import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
// import filterIcon from "../../assets/filterIcon.svg";
// import arrowRightIcon from "../../assets/arrow_right.svg";
import FilterBlock from "./FilterBlock";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./Catalog.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/reducers/productReducer";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Catalog = () => {
    let [loaderState, setLoaderState] = useState(false);
    let products = useSelector((item) => item.product.products);
    let dispatch = useDispatch();

    // function loaderToggle() {
    //     if (products.length !== 0 && !products) {
    //         setLoaderState(true);
    //     } else {
    //         setLoaderState(false);
    //     }
    // }

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    // useEffect(() => {
    //     loaderToggle();
    // }, [products]);

    return (
        <div className="relative">
            {loaderState && (
                <div className="z-10 fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center">
                    <div className="loaderAdmin"></div>
                </div>
            )}
            <div className="content pb-20">
                <h1 className="text-start text-3xl sm:text-5xl mt-10">
                    Каталог
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-10 md:mt-16 mt-8 gap-6">
                    <div className="md:col-start-1 lg:col-end-2 md:col-end-4 relative">
                        <FilterBlock />
                    </div>
                    <div className=" lg:col-start-2 md:col-start-4 lg:col-end-6 md:col-end-11 ">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((item) => (
                                <ProductCard key={item.id} item={item} />
                            ))}
                        </div>
                        <div className="paginationCatalog flex justify-center md:justify-end mt-16">
                            <Stack spacing={2}>
                                <Pagination
                                    count={8}
                                    variant="outlined"
                                    shape="rounded"
                                />
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
