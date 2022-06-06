import { ActionTypes } from "../constants/action-types";

export const setContactDetails = (contacts) => {
  return {
    type: ActionTypes.GET_CONTACT_DETAILS,
    payload: contacts,
  };
};
