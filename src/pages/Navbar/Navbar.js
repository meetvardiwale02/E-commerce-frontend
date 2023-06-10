/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  //set the navigation varaible
  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/dashboard");
  };
  // navigate to the cart
  const viewCart = () => navigate("/viewCart");

  // sign out
  const signOut = () => {
    localStorage.clear("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="navbar"
        style={{
          backgroundColor: "#1f2937",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "999",
        }}
      >
        <div className="container-fluid">
          <button
            type="button"
            className="navbar-brand"
            style={{ color: "white" }}
            onClick={dashboard}
          >
            Dashboard
          </button>

          <button
            type="button"
            className="navbar-brand"
            style={{ color: "white" }}
          >
            Orders
          </button>

          <form className="d-flex">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "40px",
              }}
            >
              <div>
                <i
                  class="fa-solid fa-cart-shopping"
                  style={{ color: "white", fontSize: "2rem" }}
                  onClick={viewCart}
                ></i>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="search"
                  className="form-control"
                />
              </div>

              <div>
                <button
                  type="button"
                  className="navbar-brand"
                  style={{ color: "white" }}
                  onClick={signOut}
                >
                  SignOut
                </button>
              </div>

              <div></div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};
