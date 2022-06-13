import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactDetailsSlice = createSlice({
  name: "allContacts",
  initialState: initialState,
  reducers: {
    setContactDetails(state, action) {
      return { ...state, items: action.payload };
    },
  },
});

export const { setContactDetails } = contactDetailsSlice.actions;
export default contactDetailsSlice.reducer;
