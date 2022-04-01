import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
};

export default Pages;
