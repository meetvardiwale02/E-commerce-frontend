import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart operations",
  initialState,
  reducers: {
    viewCart: (state, action) => {
      state.cartProducts = action.payload;
      console.log("cart redux", state.cartProducts);
    },
  },
});

export const { viewCart } = cartSlice.actions;
export default cartSlice.reducer;
