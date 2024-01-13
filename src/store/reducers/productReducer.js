import { addDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { productRef, reduxConsts } from "../../const";
import { db } from "../../fire";

const stater = {
    products: [],
    oneProduct: {},
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    cartSum: 0,
};

export const productReducer = (state = stater, action) => {
    switch (action.type) {
        case reduxConsts.GET_PRODUCT:
            return { ...state, products: action.payload };

        case reduxConsts.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };

        case reduxConsts.GET_ONE_PRODUCT:
            return { ...state, oneProduct: action.payload };

        case reduxConsts.GET_CART:
            return { ...state, cart: action.payload };

        case reduxConsts.SET_CART_SUM:
            return { ...state, cartSum: action.payload };

        case reduxConsts.ADD_PRODUCT_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        default:
            return state;
    }
};

export const getProducts = (page = 1) => {
    return async (dispatch) => {
        try {
            let data = await getDocs(productRef);
            dispatch({
                type: reduxConsts.GET_PRODUCT,
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const addData = (film) => {
    return async () => {
        try {
            await addDoc(productRef, film);
        } catch (e) {
            console.log(e);
        } finally {
            console.log("done");
        }
    };
};

export const getOneProduct = (id) => {
    return async (dispatch) => {
        try {
            const oneFilmRef = doc(db, "products", id);
            const data = await getDoc(oneFilmRef);
            dispatch({
                type: reduxConsts.GET_ONE_PRODUCT,
                payload: {
                    ...data.data(),
                    id: data.id,
                },
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export function getCart() {
    return (dispatch) => {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]");
        } else {
            let psevdoCartArr = JSON.parse(localStorage.getItem("cart"));
            console.log(psevdoCartArr);
            dispatch({ type: reduxConsts.GET_CART, payload: psevdoCartArr });
        }
    };
}

export function addProductToCart(data, id) {
    return (dispatch) => {
        let psevdoCartArr = JSON.parse(localStorage.getItem("cart") || "[]");
        let flag = psevdoCartArr.some((item) => item.id === id);
        if (!flag) {
            data.count = 1;
            psevdoCartArr.push(data);
            localStorage.setItem("cart", JSON.stringify(psevdoCartArr));
            dispatch({ type: reduxConsts.ADD_PRODUCT_TO_CART, payload: data });
        } else {
            dispatch(deleteFromCart(id));
        }
    };
}

export function deleteFromCart(id) {
    return (dispatch) => {
        let psevdoCartArr = JSON.parse(localStorage.getItem("cart") || "[]");
        let filteredArr = psevdoCartArr.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(filteredArr));
        dispatch(getCart());
    };
}

export function setCartCounter(id, operation, cart) {
    return (dispatch) => {
        let psevdoArr = [...cart];
        console.log();
        for (let i of psevdoArr) {
            if (i.id === id) {
                if (operation === "plus") {
                    i.count++;
                } else if (operation === "minus" && i.count > 1) {
                    i.count--;
                }
            }
        }
        localStorage.setItem("cart", JSON.stringify(psevdoArr));
        dispatch(getCart());
        // handleCartSum();
    };
}

export function handleCartSum(cartArr) {
    return (dispatch) => {
        if (cartArr.length >= 1) {
            let sum = 0;
            for (let i of cartArr) {
                if (parseInt(i.discount) === 0) {
                    sum += i.count * i.price;
                } else {
                    sum += i.count * i.discount;
                }
            }
            dispatch({ type: reduxConsts.SET_CART_SUM, payload: sum });
        } else {
            dispatch({ type: reduxConsts.SET_CART_SUM, payload: 0 });
        }
    };
}
