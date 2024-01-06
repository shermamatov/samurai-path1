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
                <hr className="mt-3 opacity-60" />
                <div className={`${filterState ? "block" : "hidden"}`}>
                    <div className="mt-2">
                        <h3 className="text-base lg:text-lg opacity-90">тип</h3>
                        <div className="text-white opacity-60 text-sm lg:text-base">
                            <div className=" flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                <p>накладные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                <p>беспроводные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
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
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                <p className="">Marshall</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                <p>AirPods</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
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
                                <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                    <p>свой порядок</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                                <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                    <p>по возростанию</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                                <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
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
                <div className="flex justify-between items-center">
                    <h2 className="text-lg lg:text-xl">Фильтры</h2>
                    <img src={filterIcon} alt="картинка" />
                </div>
                <hr className="mt-3 opacity-60" />
                <div>
                    <div className="mt-2">
                        <h3 className="text-base lg:text-lg opacity-90">тип</h3>
                        <div className="text-white opacity-60 text-sm lg:text-base">
                            <div className=" flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                <p>накладные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                <p>беспроводные</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
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
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                <p className="">Marshall</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                <p>AirPods</p>
                                <img
                                    className="w-3 lg:w-4"
                                    src={arrowRightIcon}
                                    alt="картинка"
                                />
                            </div>
                            <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
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
                                <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                    <p>свой порядок</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                                <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
                                    <p>по возростанию</p>
                                    <img
                                        className="w-3 lg:w-4"
                                        src={arrowRightIcon}
                                        alt="картинка"
                                    />
                                </div>
                                <div className="flex justify-between items-center ml-3 mt-1 cursor-pointer">
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
