import { SET_ACTIVE_BODY, SET_ACTIVE_TAB, SET_LISTING } from "./actionTypes"

export const setActiveTab = (tab) => {
    return {
        type: SET_ACTIVE_TAB,
        payload:tab
    }
}

export const setActiveBody = (data) => {
    return {
        type: SET_ACTIVE_BODY,
        payload:data
    }
}

export const setListing = (data) => {
    return {
        type: SET_LISTING,
        payload:data
    }
}