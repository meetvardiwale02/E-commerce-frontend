import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "Products operations",
  initialState,
  reducers: {
    viewAllProducts: (state, action) => {
      console.log("action payload of products", action.payload);
      state.products = action.payload;
    },
  },
});

export const { viewAllProducts } = productSlice.actions;

export default productSlice.reducer;
