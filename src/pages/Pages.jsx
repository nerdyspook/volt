import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    );
};

export default Pages;
