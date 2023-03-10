// import { Navbar } from "../component/Navbar";
import { Routes, Route } from "react-router-dom";
import { Products } from "../view/Products";
import { Admin } from "../view/Admin";
import { Contact } from "../view/Contact";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { AddProduct } from "../view/AddProduct";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />}>
          Products
        </Route>
        <Route path="/admin" element={<Admin />}>
          Admin
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="/signup" element={<Signup />}>
          SingUp
        </Route>
        <Route path="/addproduct" element={<AddProduct />}>
          Add Product
        </Route>
      </Routes>
    </div>
  );
};
