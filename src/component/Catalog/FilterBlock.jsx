import React, { useState } from "react";
import filterIcon from "../../assets/filterIcon.svg";
import arrowRightIcon from "../../assets/arrow_right.svg";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./Catalog.scss";
import sortIcon from "../../assets/sort.svg";
const FilterBlock = () => {
    let [filterState, setFilterState] = useState(false);
    return (
        <div>
            <div className="block md:hidden relative">
                <div
                    onClick={() => setFilterState(!filterState)}
                    className="flex justify-between items-center"
                >
                    <h2 className="text-lg lg:text-xl">Фильтры</h2>
                    <img src={filterIcon} alt="картинка" />
                </div>
                <hr className="mt-3 opacity-60 " />
                <div
                    className={`${
                        filterState ? "block" : "hidden"
                    } duration-500`}
                >
                    <div className="md:mt-0 mt-5">
                        {/* <h2 className="text-lg lg:text-xl">найти</h2> */}
                        <div className="groupSearch">
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="iconSearch"
                            >
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                            <input
                                className="inputSearch"
                                type="search"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-base lg:text-lg opacity-90">тип</h3>
                        <div className="text-white opacity-60 text-sm lg:text-base">
                            <div className=" flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>накладные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>беспроводные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>проводные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-base lg:text-lg opacity-90">
                            бренд
                        </h3>
                        <div className="text-white opacity-60 text-sm lg:text-base">
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p className="">Marshall</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>AirPods</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>проводные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg">Сортировать</h2>
                            <img src={sortIcon} alt="картинка" />
                        </div>
                        <hr className="mt-3 opacity-60" />
                        <div className="mt-2">
                            <h3 className="text-base lg:text-lg opacity-90">
                                по цене
                            </h3>
                            <div className="text-white opacity-60 text-sm lg:text-base">
                                <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                    <p>свой порядок</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                                <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                    <p>по возростанию</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                                <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                    <p className="">по убыванию</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className="mt-5 opacity-60" />
                    </div>
                </div>
            </div>
            <div className="md:block hidden">
                <div>
                    {/* <h2 className="text-lg lg:text-xl">найти</h2> */}
                    <div className="groupSearch">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="iconSearch"
                        >
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                        <input
                            className="inputSearch"
                            type="search"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg lg:text-xl">Фильтры</h2>
                    <img src={filterIcon} alt="картинка" />
                </div>
                <hr className="mt-3 opacity-60" />
                <div>
                    <div className="mt-2">
                        <h3 className="text-base lg:text-lg opacity-90">тип</h3>
                        <div className="text-white opacity-60 text-sm lg:text-base">
                            <div className=" flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>накладные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>беспроводные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>проводные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-base lg:text-lg opacity-90">
                            бренд
                        </h3>
                        <div className="text-white opacity-60 text-sm lg:text-base">
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p className="">Marshall</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>AirPods</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                <p>проводные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg">Сортировать</h2>
                            <img src={sortIcon} alt="картинка" />
                        </div>
                        <hr className="mt-3 opacity-60" />
                        <div className="mt-2">
                            <h3 className="text-base lg:text-lg opacity-90">
                                по цене
                            </h3>
                            <div className="text-white opacity-60 text-sm lg:text-base">
                                <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                    <p>свой порядок</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                                <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                    <p>по возростанию</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                                <div className="flex justify-between items-center ml-3 mt-2 cursor-pointer">
                                    <p className="">по убыванию</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBlock;
