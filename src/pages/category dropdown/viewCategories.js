import React, { useEffect } from "react";
import { fetchCategoiresAPI } from "../../API/fetchCategoriesAPI";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCategoires } from "../../app/categories.slice";
import { productCategoriesAPI } from "../../API/productCategoriesAPI";
import { viewAllProducts } from "../../app/products.slice";

export const ViewCategories = () => {
  // use the dispatch mthod to diaspatch the action
  const dispatch = useDispatch();

  // access the store values using the useSelector methods
  const categoryList = useSelector((state) => state.categoryList.categoryList);

  // fill the category data on page load
  const getCategories = async () => {
    const response = await fetchCategoiresAPI();

    const categoryList = response.data;
    if (categoryList) {
      dispatch(fetchCategoires(categoryList));
    } else {
      dispatch(fetchCategoires([]));
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // send the category key and fetch the category data
  const categoryKey = async (e) => {
    const params = { id: e.target.value };

    const response = await productCategoriesAPI(params);

    const categoryProduct = response.data;

    const newData = categoryProduct?.map((data) => data.product_master);

    if (categoryProduct) {
      dispatch(viewAllProducts(newData));
    }
  };

  return (
    <div>
      <select onClick={(e) => categoryKey(e)} className="form-control">
        <option value="" disabled selected hidden>
          View Categories
        </option>
        {categoryList && categoryList.length > 0
          ? categoryList?.map((categoryData, index) => (
              <option value={categoryData.id} key={index}>
                {" "}
                {categoryData.category_name}{" "}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};
