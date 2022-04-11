import React from "react";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import { useCart } from "../../contexts/CartContext";
import { addWishlist } from "../../utilities/add-wishlist";
import { removeCart } from "../../utilities/remove-cart";

const CartProduct = ({ product }) => {
    const { stateCart, dispatchCart } = useCart();
    const { myWishlist } = stateCart;
    const { _id, id, img, title, details, price, qty } = product;

    return (
        <div className="card-cart" key={id}>
            <img src={img} alt={title} />
            <div className="card-details">
                <div className="heading">
                    <h4>
                        {details} <span>{`₹${price}`}</span>
                    </h4>
                    <h6>{title}</h6>
                </div>

                <p>Black/Rough Green/White/Total Orange</p>

                <div className="order__details">
                    <div className="size">
                        <label htmlFor="size">Size</label>
                        <select name="variant" id="variant" className="variant">
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                        </select>
                    </div>

                    <div className="quantity">
                        <label htmlFor="quantity__counter">Quantity</label>
                        <QuantityCounter product={product} qty={qty} />
                    </div>
                </div>

                <div className="order__actions">
                    <button
                        className="btn"
                        onClick={
                            myWishlist.length === 0
                                ? () => addWishlist(product, dispatchCart)
                                : () => {
                                      if (
                                          myWishlist.find(
                                              (item) => item._id === _id
                                          )
                                      ) {
                                          alert("Already in Wishlist");
                                      } else {
                                          addWishlist(product, dispatchCart);
                                      }
                                  }
                        }
                    >
                        Move to Favourites
                    </button>
                    <button
                        className="btn"
                        onClick={() => removeCart(_id, dispatchCart)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
