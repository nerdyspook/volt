import React from "react";
import { FaHeart } from "react-icons/fa";
import "./Product.scss";

import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { addWishlist } from "../../utilities/add-wishlist";
import { removeWishlist } from "../../utilities/remove-wishlist";
import { addCart } from "../../utilities/add-cart";
import { quantityCart } from "../../utilities/quantity-cart";

const Product = ({ product, id, title, image, details, rating, price }) => {
    const navigate = useNavigate();

    const { stateCart, dispatchCart } = useCart();
    const { myWishlist, myCart } = stateCart;

    const { stateAuth } = useAuth();

    let asd = myWishlist.some((item) => item._id === id);

    return (
        <div className="product_card">
            <img src={image} alt={title} />
            {stateAuth.isAuth ? (
                <FaHeart
                    id="wish"
                    className={`wish ${
                        myWishlist.find((item) => item._id === id) && `added`
                    }`}
                    onClick={
                        myWishlist.length === 0
                            ? () => addWishlist(product, dispatchCart)
                            : () =>
                                  myWishlist.find((item) => item._id === id)
                                      ? removeWishlist(id, dispatchCart)
                                      : addWishlist(product, dispatchCart)
                    }
                />
            ) : (
                <FaHeart
                    className="wish"
                    id="wish"
                    onClick={() => navigate("/login")}
                />
            )}

            <div className="product_details">
                <p className="title">{title}</p>
                <p className="details">{details}</p>
                <div className="rating">
                    {rating}
                    <sup>⭐</sup>
                </div>
                <p className="price">₹ {price}</p>
            </div>

            {stateAuth.isAuth ? (
                <div
                    className="add"
                    onClick={
                        myCart.length === 0
                            ? () => addCart(product, dispatchCart)
                            : () =>
                                  myCart.find((item) => item._id === id)
                                      ? quantityCart(
                                            id,
                                            dispatchCart,
                                            "increment"
                                        )
                                      : addCart(product, dispatchCart)
                    }
                >
                    Add to Cart
                </div>
            ) : (
                <div className="add">Add to Cart</div>
            )}
        </div>
    );
};

export default Product;
