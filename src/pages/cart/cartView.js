import React, { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { fetchCartProductAPI } from "../../API/fetchCartProductsAPI";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { viewCart } from "../../app/cart.slice";
import { SingleProductCart } from "./components/SingleProductsCart";

export const CartView = () => {
  // use dispatch metho
  const dispatch = useDispatch();

  // const useselector method to access the cart products

  // fetch the data on cart page render
  const cartProducts = async () => {
    const response = await fetchCartProductAPI();
    if (response) {
      const cartData = response.data;
      dispatch(viewCart(cartData));
    }
  };

  useEffect(() => {
    cartProducts();
  }, []);

  const cartAllProducts = useSelector((state) => state.cart.cartProducts);
  console.log("cartAllProducts", cartAllProducts);

  return (
    <div>
      <Navbar />
      <section style={{ backgroundColor: "#e2e9ef" }}>
        <div class="text-center container py-2">
          <div className="row">
            {cartAllProducts && cartAllProducts.length > 0
              ? cartAllProducts.map((data) => <SingleProductCart data={data} />)
              : ""}
          </div>
        </div>
      </section>
    </div>
  );
};
