import thunk from "redux-thunk";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";


export const store = createStore(
    reducer,
    compose(applyMiddleware(thunk))
)
