import { ActionTypes } from "../constants/action-types";

const initialState = []

export const contactDetailsReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.GET_CONTACT_DETAILS:
            return [...payload];
        default:
            return state;   
    }
}