import React from "react";
import "./Cart.scss";
import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";
import { products } from "../../fakeData";

const Cart = () => {
    return (
        <main className="main container">
            <section className="contents">
                <div className="title">Items in Cart: {products.length}</div>

                {products.map((product) => (
                    <div className="card-cart" key={product.id}>
                        <img src={product.img} alt={product.title} />
                        <div className="card-details">
                            <div className="heading">
                                <h4>
                                    {product.details}{" "}
                                    <span>{`₹${product.price}`}</span>
                                </h4>
                                <h6>{product.title}</h6>
                            </div>

                            <p>Black/Rough Green/White/Total Orange</p>

                            <div className="order__details">
                                <div className="size">
                                    <label htmlFor="size">Size</label>
                                    <select
                                        name="variant"
                                        id="variant"
                                        className="variant"
                                    >
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                    </select>
                                </div>

                                <div className="quantity">
                                    <label htmlFor="quantity__counter">
                                        Quantity
                                    </label>
                                    <QuantityCounter />
                                </div>
                            </div>

                            <div className="order__actions">
                                <button className="btn">
                                    Move to Favourites
                                </button>
                                <button className="btn">Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="order__summary">
                <div className="title">Order Summary</div>

                <ul className="summary">
                    <li>
                        Subtotal <span>₹ 28,185</span>
                    </li>
                    <li>
                        Discount <span className="discount">-₹4000</span>
                    </li>
                    <li>
                        Delivery Charges <span className="charges">FREE</span>
                    </li>
                </ul>

                <div className="total__price">
                    Total Amount <span>₹ 24,185</span>
                </div>

                <div className="checkout">Checkout</div>
            </section>
        </main>
    );
};

export default Cart;
