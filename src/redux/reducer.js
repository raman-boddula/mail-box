import {  SET_ACTIVE_BODY, SET_ACTIVE_TAB, SET_LISTING } from "./actionTypes"

export const initialState = {
    activeTab: "inbox",
    activeBody: false,
    listing: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: payload
            }
        case SET_ACTIVE_BODY:
            return {
                ...state,
                activeBody: payload
            }
        case SET_LISTING:
            return {
                ...state,
                listing: payload
            }
        
        default:
            return state;
    }
}