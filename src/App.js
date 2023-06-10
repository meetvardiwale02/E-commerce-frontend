import "./App.css";
import Register from "./pages/authentication/Register/Register";
import Login from "./pages/authentication/login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartView } from "./pages/cart/cartView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/viewCart" element={<CartView />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
