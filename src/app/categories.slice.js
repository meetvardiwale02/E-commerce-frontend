import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryList: [],
};
const categorySlice = createSlice({
  name: "categories operation",
  initialState,
  reducers: {
    fetchCategoires: (state, action) => {
      state.categoryList = action.payload;
    },
  },
});

export const { fetchCategoires } = categorySlice.actions;
export default categorySlice.reducer;
