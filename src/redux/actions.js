import axios from "axios"
import { GET_EMAILS, SET_ACTIVE_BODY, SET_ACTIVE_TAB, SET_LISTING } from "./actionTypes"



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

export const getEmail = (data) => {
    return {
        type: GET_EMAILS,
        payload: data,
    };
}
export const getEmailList = () => (dispatch) => {
    axios.get('https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123')
        .then((res) => dispatch(getEmail(res.data)));
};