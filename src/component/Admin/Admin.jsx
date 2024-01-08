import React, { useEffect, useState } from "react";
import "./Admin.scss";
import { useDispatch } from "react-redux";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../fire";
import { addData } from "../../store/reducers/productReducer";
const Admin = () => {
    // ! some states start
    let [inputCount, setInputCount] = useState([1, 1, 1, 1, 1]);
    let [imgStoreModal, setImgStoreModal] = useState(true);
    // ! some states end

    //! data states start
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [cardImg, setCardImg] = useState("");
    let [discount, setDiscount] = useState("");
    let [description, setDescription] = useState("");
    let [have, setHave] = useState(true);
    let [type, setType] = useState("");
    let [brend, setBrend] = useState("");
    let [charTitle1, setCharTitle1] = useState("");
    let [charTitle2, setCharTitle2] = useState("");
    let [charDesc1, setCharDesc1] = useState("");
    let [charDesc2, setCharDesc2] = useState("");
    let [charImg1, setCharImg1] = useState("");
    let [charImg2, setCharImg2] = useState("");

    let [productImg, setProductImg] = useState([]);
    //! data states end

    // ! storage store start
    const [imageFileArr, setImageFileArr] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(null);
    // ! storage store end

    //! consts start
    let dispatch = useDispatch();
    //! consts end

    //! functions start
    function addPictureInput() {
        let newArr = [...inputCount];
        newArr.push(1);
        setInputCount(newArr);
    }
    function productHandler() {
        let obj = {
            title,
            cardImg,
            price,
            discount,
            description,
            have,
            productImg,
            type,
            brend,
            charTitle1,
            charTitle2,
            charDesc1,
            charDesc2,
            charImg1,
            charImg2,
        };
        dispatch(addData(obj));
    }
    // function productImgArrConstructor(file) {
    //     let newArr = [...productImg];
    //     newArr.push(file);
    //     console.log(newArr);
    //     setProductImg(newArr);
    // }
    // function imageFileArrConstructor(file) {
    //     let newArr = [...imageFileArr];
    //     newArr.push(file);
    //     setImageFileArr(newArr);
    // }
    // function uploadImgArrLoop() {
    //     for (let i of imageFileArr) {
    //         uploadFile(i, productImgArrConstructor);
    //     }
    //     console.log("done");
    // }
    const uploadFile = (stateName, setStateName, isLoop = false) => {
        const storageRef = ref(storage, "images/" + stateName.name);
        const uploadTask = uploadBytesResumable(storageRef, stateName);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress !== 100 ? true : false);
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized":
                        // User doesn't have permission to access the object
                        break;
                    case "storage/canceled":
                        // User canceled the upload
                        break;
                    // ...
                    case "storage/unknown":
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default:
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    if (isLoop) {
                        setStateName((e) => [...e, downloadURL]);
                    } else {
                        setStateName(downloadURL);
                    }
                    console.log("File available at", downloadURL);
                });
            }
        );
    };
    // ! functions end
    return (
        <div className="relative">
            <div className="content pb-10 pt-10">
                {uploadProgress && (
                    <div className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center">
                        <div className="loaderAdmin"></div>
                    </div>
                )}
                {/* {imgStoreModal && (
                    <div
                        onClick={() => setImgStoreModal(false)}
                        className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur-sm"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-96 w-[90%] p-8 bg-gray-100 rounded-md relative"
                        >
                            <div
                                onClick={() => setImgStoreModal(false)}
                                className="text-black absolute top-8 text-xl right-8 z-10 cursor-pointer"
                            >
                                ✖
                            </div>
                            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                картинки продукта
                            </label>
                            {inputCount.map((item, index) => (
                                <input
                                    onChange={(e) =>
                                        imageFileArrConstructor(
                                            e.target.files[0]
                                        )
                                    }
                                    key={index}
                                    name={"pictures" + index}
                                    type="file"
                                    className="flex mt-2 h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-700 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                                />
                            ))}
                            <button
                                onClick={() => {
                                    // uploadImgArrLoop();
                                    setImgStoreModal(false);
                                }}
                                className="h-10 w-full mt-3 rounded-md border-2 border-black border-input px-3 py-2 text-sm text-black "
                            >
                                готово
                            </button>
                        </div>
                    </div>
                )} */}
                <h1 className="text-4xl font-bold text-center mb-6">
                    добавить продукт
                </h1>
                <div className="flex justify-evenly flex-wrap">
                    <div className="max-w-[420px] w-[100%]">
                        <h2 className="text-2xl mt-2 mb-1">о продукте</h2>
                        <hr className=" mb-3 opacity-70" />
                        <div className="mt-2">
                            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                название
                            </label>
                            <input
                                className="input"
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="название"
                                type="text"
                            />
                        </div>
                        <div className="mt-2">
                            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                картинка карточки
                            </label>
                            <input
                                name="cardImg"
                                onChange={(e) => {
                                    uploadFile(e.target.files[0], setCardImg);
                                }}
                                id="picture"
                                type="file"
                                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                            />
                        </div>
                        <div className="mt-2">
                            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                цена
                            </label>
                            <input
                                onChange={(e) => setPrice(e.target.value)}
                                className="input"
                                name="text"
                                placeholder="цена"
                                type="number"
                            />
                        </div>
                        <div className="mt-2">
                            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                цена со скидкой
                            </label>
                            <input
                                onChange={(e) => setDiscount(e.target.value)}
                                className="input"
                                name="discount"
                                placeholder="цена со скидкой"
                                type="number"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                тип
                            </label>
                            <select
                                onChange={(e) => setType(e.target.value)}
                                className="input"
                                defaultValue={"все"}
                            >
                                <option value="все">тип</option>
                                <option value="накладные">накладные</option>
                                <option value="беспроводные">
                                    беспроводные
                                </option>
                                <option value="проводные">проводные</option>
                                {/* <option value="">накладные беспроводные проводные</option> */}
                            </select>
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                бренд
                            </label>
                            <select
                                onChange={(e) => setBrend(e.target.value)}
                                className="input"
                                defaultValue={"все"}
                            >
                                <option value="все">другое</option>
                                <option value="marshall">marshall</option>
                                <option value="airpods">airpods</option>
                                <option value="JBL">JBL</option>
                                {/* <option value="">накладные беспроводные проводные</option> */}
                            </select>
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                в наличии
                            </label>
                            <select
                                onChange={(e) => setHave(e.target.value)}
                                className="input"
                                defaultValue={"true"}
                            >
                                <option value={true}>в наличии</option>
                                <option value={false}>нет в наличии</option>
                            </select>
                        </div>
                        <div className="mt-2">
                            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                описание продукта
                            </label>
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="описание продукта"
                                className="inputArea"
                            ></textarea>
                        </div>
                        <div className="mt-2">
                            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                картинки продукта
                            </label>
                            {inputCount.map((item, index) => (
                                <input
                                    onChange={(e) =>
                                        uploadFile(
                                            e.target.files[0],
                                            setProductImg,
                                            true
                                        )
                                    }
                                    key={index}
                                    name={"pictures" + index}
                                    type="file"
                                    className="flex mt-2 h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-700 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                                />
                            ))}
                            <button
                                onClick={() => addPictureInput()}
                                className="h-10 w-full mt-3 rounded-md border-2 border-gray-500 border-input px-3 py-2 text-sm text-white "
                            >
                                еще...
                            </button>
                        </div>
                    </div>
                    <div className="max-w-[420px] w-[100%] md:mt-0 mt-10">
                        <h2 className="text-2xl mt-2 mb-1">
                            характеристика продукта
                        </h2>
                        <hr className=" mb-3 opacity-70" />
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                заголовок первого блока характеристики
                            </label>
                            <input
                                onChange={(e) => setCharTitle1(e.target.value)}
                                className="input"
                                name="text"
                                placeholder="заголовок первой характеристики"
                                type="text"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                картинка первого блока характеристики
                            </label>
                            <input
                                onChange={(e) =>
                                    uploadFile(e.target.files[0], setCharImg1)
                                }
                                id="picture"
                                type="file"
                                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                описание первого блока характеристики
                            </label>
                            <textarea
                                onChange={(e) => setCharDesc1(e.target.value)}
                                placeholder="описание первой характеристики"
                                className="inputArea"
                            ></textarea>
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                заголовок второго блока характеристики
                            </label>
                            <input
                                onChange={(e) => setCharTitle2(e.target.value)}
                                className="input"
                                name="text"
                                placeholder="заголовок второй характеристики"
                                type="text"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                картинка второго блока характеристики
                            </label>
                            <input
                                onChange={(e) =>
                                    uploadFile(e.target.files[0], setCharImg2)
                                }
                                id="picture"
                                type="file"
                                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                описание второго блока характеристики
                            </label>
                            <textarea
                                onChange={(e) => setCharDesc2(e.target.value)}
                                placeholder="описание второй характеристики"
                                className="inputArea"
                            ></textarea>
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                название
                            </label>
                            <input
                                className="input"
                                name="text"
                                placeholder="name"
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-6">
                    <button
                        onClick={productHandler}
                        className="max-w-96 w-[100%]  h-10 bg-green-700 rounded-md"
                    >
                        готово
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admin;
