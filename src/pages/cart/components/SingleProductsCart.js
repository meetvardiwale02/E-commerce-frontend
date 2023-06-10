import React, { useState, useEffect } from "react";
import { updateQntyAPI } from "../../../API/updateQntyAPI";
import { removeProductsAPI } from "../../../API/removeProductsAPI";
import { useDispatch } from "react-redux";
// import { viewCart } from "../../../app/cart.slice";
import { viewCart } from "../../../app/cart.slice";
import { toast } from "react-toastify";
import { fetchCartProductAPI } from "../../../API/fetchCartProductsAPI";

export const SingleProductCart = ({ data }) => {
  // use dispatch method to re-render after delete
  const dispatch = useDispatch();

  // use state foe the quantity state

  const [qnty, setQnty] = useState(data.product_quantity);
  const [error, setError] = useState();

  // set the useEffect and cakk the api to send the state value
  const updateQnty = async ({ qnty }) => {
    const updateData = { qnty, product_id: data.product_id };

    const response = await updateQntyAPI(updateData);

    if (!response.data) {
      setError("Product is out of stock !!");
    } else {
      setQnty(response.data);
      setError("");
    }
  };

  // API remove products from the cart
  const remove = async (e) => {
    const product_id = e.target.value;
    console.log("product_id", product_id);
    const params = { product_id: product_id };
    const response = await removeProductsAPI(params);

    const reViewCart = await fetchCartProductAPI();
    console.log("review", reViewCart);

    if (response) {
      await dispatch(viewCart(reViewCart.data));
      toast.warning("Product removed from cart");
    }
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
            src={data.product_master.product_image}
            class="w-100"
            style={{ height: "200px", width: "100px" }}
          />
        </div>
        <div class="card-body">
          <div>
            <strong>Product Name :</strong>
            {data.product_master.product_name}
          </div>

          <div>
            <strong>Product Price :</strong>
            <p>{data.product_master.product_price}</p>
          </div>

          {error ? <span style={{ color: "red" }}>{error}</span> : ""}
          <div
            class="d-flex"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div class="input-group mb-3">
                <button
                  class="btn btn-outline-secondary"
                  value={data.id}
                  onClick={(e) => updateQnty({ qnty: qnty - 1 })}
                >
                  -
                </button>
                <input
                  type="text"
                  value={qnty}
                  aria-label="Amount (to the nearest dollar)"
                  style={{
                    width: "20%",
                    border: "1px solid gray",
                    backgroundColor: "whitesmoke",
                    borderRadius: "12%",
                    textAlign: "center",
                  }}
                />
                <button
                  class="btn btn-outline-secondary"
                  value={data.product_quantity + 1}
                  onClick={(e) => updateQnty({ qnty: qnty + 1 })}
                >
                  +
                </button>
              </div>

              {/* <div>
                  <button className="btn btn-danger" value={data.id} onClick={(e) =>removeQty(e)} >-</button>
                </div>  
                
                  <input type="text" value={qnty} style={{width:"20%",border:"1px solid gray",backgroundColor:"whitesmoke",borderRadius:"12%",textAlign:"center"}} />
                
                <div>
                  <button className="btn btn-success" value={data.id} onClick={(e)=>addQty(e)}>+</button>
                </div> */}
              <div></div>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-outline-danger"
                value={data.product_id}
                onClick={(e) => remove(e)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
