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
                // onClick={() => setCount((prevCount) => prevCount - 1)}
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
            <div className="quantity__count">
                {/* {count} */}
                {qty}
            </div>
            <button
                className="increment"
                // onClick={() => setCount((prevCount) => prevCount + 1)}
                onClick={() => {
                    console.log(product);
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
