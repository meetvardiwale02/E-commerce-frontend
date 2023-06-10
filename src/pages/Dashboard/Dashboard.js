import react from "react";
import { Navbar } from "../Navbar/Navbar";
import { ViewCategories } from "../category dropdown/viewCategories";
import { ProductSource } from "../product gallery/ProductSource";

export const Dashboard = () => {
  return (
    <div className="wrapper">
      <div style={{ display: "flex" }}>
        {/* // this div is for sicde navbar */}
        <div
          style={{
            width: "20%",
            height: "100vh",
            backgroundColor: "#1f2937",
            position: "fixed",
            left: "0",
            top: "0px",
            padding: "20px",
          }}
        >
          <div style={{ marginTop: "2rem" }}>
            <ViewCategories />
          </div>
        </div>
        {/* // this div is for product view */}

        <section
          style={{
            width: "80%",
            marginLeft: "auto",
            backgroundColor: "#e2e9ef",
          }}
        >
          <Navbar />
          <div class="text-center container py-2">
            <main style={{ marginTop: "75px" }}>
              <ProductSource />
            </main>
          </div>
        </section>
      </div>
    </div>
  );
};
