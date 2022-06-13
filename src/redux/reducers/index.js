import { combineReducers } from "@reduxjs/toolkit";
import { contactDetailsReducer } from "./contactDetailsReducer";

const reducers = combineReducers({
  allContacts: contactDetailsReducer,
});

export default reducers;
