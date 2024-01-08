import { applyMiddleware, combineReducers, createStore } from "redux";
import { productReducer } from "./reducers/productReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ product: productReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));
