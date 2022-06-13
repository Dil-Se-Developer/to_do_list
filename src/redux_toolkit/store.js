import { configureStore } from "@reduxjs/toolkit";
import contactDetailsReducer from "./slices/contactDetailsSlice";

const store = configureStore({
  reducer: {
    allContacts: contactDetailsReducer,
  },
});

export default store;