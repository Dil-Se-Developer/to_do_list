import { combineReducers } from "redux";
import { contactDetailsReducer } from "./contactDetailsReducer";

const reducers = combineReducers({
  allContacts: contactDetailsReducer,
});

export default reducers;
