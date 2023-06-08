import { GET_ACTIVE_BODY, GET_ACTIVE_TAB, GET_LISTING, REMOVE_BODY, REMOVE_TAB, SET_ACTIVE_BODY, SET_ACTIVE_TAB, SET_LISTING } from "./actionTypes"

export const setActiveTab = (tab) => {
    return {
        type: SET_ACTIVE_TAB,
        payload:tab
    }
}
export const removeActiveTab = () => {
    return {
        type:REMOVE_TAB
    }
}
export const setActiveBody = (data) => {
    return {
        type: SET_ACTIVE_BODY,
        payload:data
    }
}
export const removeActiveBody = () => {
    return {
        type:REMOVE_BODY
    }
}
export const setListing = (data) => {
    return {
        type: SET_LISTING,
        payload:data
    }
}
export const getListing = () => {
    return {
        type:GET_LISTING
    }
}
export const getActiveBody = () => {
    return {
        type:GET_ACTIVE_BODY
    }
}
export const getActiveTab = () => {
    return {
        type:GET_ACTIVE_TAB
    }
}