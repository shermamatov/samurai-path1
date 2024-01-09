import { addDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { productRef, reduxConsts } from "../../const";
import { db } from "../../fire";

const stater = {
    products: [],
    oneProduct: {},
};
export const productReducer = (state = stater, action) => {
    switch (action.type) {
        case reduxConsts.GET_PRODUCT:
            return { ...state, products: action.payload };
        case reduxConsts.ADD_PRODUCT:
            return {
                ...state,
                films: [...state.products, action.payload],
            };
        case reduxConsts.GET_ONE_PRODUCT:
            return { ...state, oneProduct: action.payload };
        // case reduxConsts.GET_WISH:
        //     return { ...state, wish: action.payload };
        // case reduxConsts.GET_SEARCH_FILMS:
        //     return { ...state, searchFilm: action.payload };
        default:
            return state;
    }
};

export const getProducts = (page = 1) => {
    return async (dispatch) => {
        try {
            let data = await getDocs(productRef);
            // let allData = await getDocs(filmRef);
            // let gfd = allData.docs[(page - 1) * limitPage];
            // let q = query(filmRef, limit(limitPage), startAt(gfd));
            // let data = await getDocs(q);
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
            console.log({
                ...data.data(),
                id: data.id,
            });
        } catch (e) {
            console.log(e);
        }
    };
};
