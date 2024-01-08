import React from "react";
import { arr } from "../../const";
import ProductCard from "../ProductCard/ProductCard";
// import filterIcon from "../../assets/filterIcon.svg";
// import arrowRightIcon from "../../assets/arrow_right.svg";
import FilterBlock from "./FilterBlock";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./Catalog.scss";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const Catalog = () => {
    return (
        <div className="content pb-20">
            <h1 className="text-start text-3xl sm:text-5xl mt-10">Каталог</h1>
            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-10 md:mt-16 mt-8 gap-6">
                <div className="md:col-start-1 lg:col-end-2 md:col-end-4 relative">
                    <FilterBlock />
                </div>
                <div className=" lg:col-start-2 md:col-start-4 lg:col-end-6 md:col-end-11 ">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {arr.map((item) => (
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
    );
};

export default Catalog;
