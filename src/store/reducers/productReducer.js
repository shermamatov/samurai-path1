import { addDoc, getDocs } from "firebase/firestore";
import { productRef, reduxConsts } from "../../const";

const stater = {
    products: [],
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
        // case reduxConsts.GET_ONE_FILM:
        //     return { ...state, film: action.payload };
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
