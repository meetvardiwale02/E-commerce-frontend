import React from "react";
import { addToCartAPI } from "../../../API/addToCartAPI";

export const ProductGallery = ({ data }) => {
  //api for add to cart
  const addToCart = async (e) => {
    const product_id = e.target.value;
    const getUserId = localStorage.getItem("authToken");

    const data = { user_id: getUserId, product_id: product_id };
    const response = await addToCartAPI(data);
    console.log("response from the cart api", response);
  };

  return (
    <div class="col-lg-4 col-md-12 mb-4">
      <div
        class="card"
        style={{
          borderRadius: "15px",
          height: "100%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div
          class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
          data-mdb-ripple-color="light"
        >
          <img
            src={data.product_image}
            class="w-100"
            style={{ height: "200px", width: "100px" }}
          />
        </div>
        <div class="card-body">
          <div>
            <strong>Product Name :</strong>
            {data.product_name}
          </div>

          <div>
            <strong>Product Price :</strong>
            <p>{data.product_price}</p>
          </div>

          <div
            class="d-flex"
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <h5>
              <button
                type="button"
                class="badge "
                style={{ backgroundColor: "#6366f1", height: "30px" }}
                value={data.id}
                onClick={(e) => addToCart(e)}
              >
                Add to cart
              </button>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
