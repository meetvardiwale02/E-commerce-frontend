import React, { useEffect } from "react";
import { ProductGallery } from "./components/ProductGallery";
import { fetchProductsAPI } from "../../API/fetchProductsAPI";
import { useDispatch } from "react-redux";
import { viewAllProducts } from "../../app/products.slice";
import { useSelector } from "react-redux";

export const ProductSource = () => {
  //define the use Dispatch
  const dispatch = useDispatch();

  // fetch the data from the redux to view the data
  const Products = useSelector((state) => state.Products.products);

  //fetch all the products using api
  const viewProducts = async () => {
    const response = await fetchProductsAPI();
    const allProducts = response.data;

    dispatch(viewAllProducts(allProducts));
  };

  useEffect(() => {
    viewProducts();
  }, []);

  return (
    <div class="row">
      {Products &&  Products.length > 0
        ? Products.map((data, index) => (
            <ProductGallery data={data} key={index} />
          ))
        : ""}
    </div>
  );
};
