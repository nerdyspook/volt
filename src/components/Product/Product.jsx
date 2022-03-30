import React from "react";
import { FaHeart } from "react-icons/fa";
import "./Product.scss";

const Product = ({ title, image, details, rating, price }) => {
    return (
        <div className="product_card">
            <img src={image} alt={title} />
            <FaHeart className="wish" id="wish" />
            <div className="product_details">
                <p className="title">{title}</p>
                <p className="details">{details}</p>
                <div className="rating">{rating}</div>
                <p className="price">₹ {price}</p>
            </div>
            <div className="add">Add to Cart</div>
        </div>
    );
};

export default Product;
