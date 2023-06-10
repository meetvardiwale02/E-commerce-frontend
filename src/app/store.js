import { configureStore } from "@reduxjs/toolkit";
import fetchCategoires from "./categories.slice";
import Products from "./products.slice";
import viewCart from "./cart.slice";

export default configureStore({
  reducer: {
    categoryList: fetchCategoires,
    Products: Products,
    cart: viewCart,
  },
});
