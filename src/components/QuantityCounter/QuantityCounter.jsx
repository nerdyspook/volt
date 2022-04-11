import React from "react";
import "./QuantityCounter.scss";
import { quantityCart } from "../../utilities/quantity-cart";
import { removeCart } from "../../utilities/remove-cart";
import { useCart } from "../../contexts/CartContext";

const QuantityCounter = ({ product, qty }) => {
    const { dispatchCart } = useCart();

    return (
        <div className="quantity__counter">
            <button
                className="decrement"
                onClick={
                    product.qty > 1
                        ? () =>
                              quantityCart(
                                  product._id,
                                  dispatchCart,
                                  "decrement",
                                  product
                              )
                        : () => removeCart(product._id, dispatchCart)
                }
            >
                -
            </button>
            <div className="quantity__count">{qty}</div>
            <button
                className="increment"
                onClick={() => {
                    quantityCart(
                        product._id,
                        dispatchCart,
                        "increment",
                        product
                    );
                }}
            >
                +
            </button>
        </div>
    );
};

export default QuantityCounter;
