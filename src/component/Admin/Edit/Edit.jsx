import React, { useEffect, useState } from "react";
import "../Admin.scss";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../fire";
import {
    editFilm,
    getOneProduct,
} from "../../../store/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Edit = () => {
    // ! redux state start
    let oneProduct = useSelector((item) => item.product.oneProduct);
    // ! redux state end

    // ! some states start
    let [inputCount, setInputCount] = useState([1, 1, 1, 1, 1]);
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
    let [productImg, setProductImg] = useState(null);
    //! data states end

    // ! storage store start
    const [uploadProgress, setUploadProgress] = useState(null);
    // ! storage store end

    //! consts start
    let dispatch = useDispatch();
    let { id } = useParams();
    //! consts end

    //! functions start

    function productImgArrHandler(file, index) {
        uploadFile(file, setProductImg, true, index);
    }

    function addPictureInput() {
        let newArr = [...productImg];
        newArr?.push("");
        setProductImg(newArr);
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
        dispatch(editFilm(id, obj));
    }

    const uploadFile = (stateName, setStateName, isLoop = false, index = 0) => {
        if (stateName) {
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
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            if (isLoop) {
                                let psevdoArr = [...productImg];
                                let deleteItem = psevdoArr.splice(
                                    index,
                                    1,
                                    downloadURL
                                );
                                setStateName(psevdoArr);
                                if (deleteItem[0] !== "" && deleteItem) {
                                    console.log(deleteItem);
                                    const deleteRef = ref(storage, deleteItem);
                                    deleteObject(deleteRef)
                                        .then(() => {
                                            console.log("удалено");
                                            // File deleted successfully
                                        })
                                        .catch((error) => {
                                            console.log("ОШИБКА" + error);
                                            // Uh-oh, an error occurred!
                                        });
                                }
                            } else {
                                setStateName(downloadURL);
                            }
                            console.log("File available at", downloadURL);
                        }
                    );
                }
            );
        }
    };

    useEffect(() => {
        dispatch(getOneProduct(id));
    }, []);

    useEffect(() => {
        setTitle(oneProduct.title);
        setPrice(oneProduct.price);
        setCardImg(oneProduct.cardImg);
        setDiscount(oneProduct.discount);
        setDescription(oneProduct.description);
        setHave(oneProduct.have);
        setType(oneProduct.type);
        setBrend(oneProduct.brend);
        setCharTitle1(oneProduct.charTitle1);
        setCharTitle2(oneProduct.charTitle2);
        setCharDesc1(oneProduct.charDesc1);
        setCharDesc2(oneProduct.charDesc2);
        setCharImg1(oneProduct.charImg1);
        setCharImg2(oneProduct.charImg2);
        setProductImg(oneProduct.productImg);
    }, [oneProduct]);

    useEffect(() => {
        console.log(productImg);
    }, [productImg]);

    return (
        <div>
            <div className="relative">
                <div className="content pb-10 pt-10">
                    {uploadProgress && (
                        <div className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center">
                            <div className="loaderAdmin"></div>
                        </div>
                    )}
                    <h1 className="text-4xl font-bold text-center mb-6">
                        изменить продукт
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
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="название"
                                    type="text"
                                />
                            </div>
                            <div className="mt-2">
                                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    картинка карточки
                                </label>
                                <div className="h-36">
                                    <input
                                        style={{
                                            backgroundImage: `url(${cardImg})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        onChange={(e) =>
                                            uploadFile(
                                                e.target.files[0],
                                                setCardImg
                                            )
                                        }
                                        name={"pictures"}
                                        type="file"
                                        className="flex object-cover  z-10 mt-2 h-[100%] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-300 file:border-0  file:text-gray-600 file:text-sm file:font-medium"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    цена
                                </label>
                                <input
                                    value={price}
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
                                    value={discount}
                                    onChange={(e) =>
                                        setDiscount(e.target.value)
                                    }
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
                                    value={type}
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
                                    value={brend}
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
                                    value={have}
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
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    placeholder="описание продукта"
                                    className="inputArea"
                                ></textarea>
                            </div>
                            <div className="mt-2">
                                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    картинки продукта
                                </label>
                                {productImg?.map((item, index) => (
                                    <div className="relative h-36" key={index}>
                                        <input
                                            style={{
                                                backgroundImage: `url(${item})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                            onChange={(e) =>
                                                productImgArrHandler(
                                                    e.target.files[0],
                                                    index
                                                )
                                            }
                                            name={"pictures" + index}
                                            type="file"
                                            className="flex object-cover  z-10 mt-2 h-[100%] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-300 file:border-0  file:text-gray-600 file:text-sm file:font-medium"
                                        />
                                    </div>
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
                                    value={charTitle1}
                                    onChange={(e) =>
                                        setCharTitle1(e.target.value)
                                    }
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

                                <div className="h-36">
                                    <input
                                        style={{
                                            backgroundImage: `url(${charImg1})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        onChange={(e) =>
                                            uploadFile(
                                                e.target.files[0],
                                                setCharImg1
                                            )
                                        }
                                        name={"pictures"}
                                        type="file"
                                        className="flex object-cover  z-10 mt-2 h-[100%] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-300 file:border-0  file:text-gray-600 file:text-sm file:font-medium"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label
                                    htmlFor="inputname"
                                    className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    описание первого блока характеристики
                                </label>
                                <textarea
                                    value={charDesc1}
                                    onChange={(e) =>
                                        setCharDesc1(e.target.value)
                                    }
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
                                    value={charTitle2}
                                    onChange={(e) =>
                                        setCharTitle2(e.target.value)
                                    }
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
                                <div className="h-36">
                                    <input
                                        style={{
                                            backgroundImage: `url(${charImg2})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        onChange={(e) =>
                                            uploadFile(
                                                e.target.files[0],
                                                setCharImg2
                                            )
                                        }
                                        name={"pictures"}
                                        type="file"
                                        className="flex object-cover  z-10 mt-2 h-[100%] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-300 file:border-0  file:text-gray-600 file:text-sm file:font-medium"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label
                                    htmlFor="inputname"
                                    className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    описание второго блока характеристики
                                </label>
                                <textarea
                                    value={charDesc2}
                                    onChange={(e) =>
                                        setCharDesc2(e.target.value)
                                    }
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
        </div>
    );
};

export default Edit;
