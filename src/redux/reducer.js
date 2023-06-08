import { GET_LISTING, REMOVE_BODY, REMOVE_TAB, SET_ACTIVE_BODY, SET_ACTIVE_TAB, SET_LISTING, GET_ACTIVE_TAB, GET_ACTIVE_BODY } from "./actionTypes"

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
        case GET_ACTIVE_TAB:
            return state.activeTab;
        case SET_ACTIVE_BODY:
            return {
                ...state,
                activeBody: payload
            }
        case GET_ACTIVE_BODY:
            return state.activeBody
        case REMOVE_TAB:
            return {
                ...state,
                activeTab: 'inbox'
            }
        case REMOVE_BODY:
            return {
                ...state,
                activeBody: false
            }
        case SET_LISTING:
            return {
                ...state,
                listing: payload
            }
        case GET_LISTING:
            return {
                ...state,
                listing: false
            }
        default:
            return state;
    }
}