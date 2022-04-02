import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default Pages;
