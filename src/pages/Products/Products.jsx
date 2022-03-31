import React from "react";

import { products } from "../../fakeData";
import "./Products.scss";
import Product from "../../components/Product/Product";

const Products = () => {
    return (
        <div className="container">
            <div className="head">Products</div>
            <main className="main">
                <section className="sidebar">
                    <div className="title">
                        Filter <button>Clear all</button>
                    </div>
                    <div className="subtitle">Gender</div>
                    <ul>
                        <li>
                            <input
                                type="radio"
                                id="men"
                                name="gender"
                                value="men"
                            />
                            <label htmlFor="men">Men</label>
                        </li>
                        <li>
                            {" "}
                            <input
                                type="radio"
                                id="women"
                                name="gender"
                                value="women"
                            />
                            <label htmlFor="women">Women</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                id="kids"
                                name="gender"
                                value="kids"
                            />
                            <label htmlFor="kids">Kids</label>
                        </li>
                    </ul>

                    <div className="subtitle">Rating</div>
                    <div className="price_range">
                        <div className="range">
                            <p>
                                1<sup>⭐</sup>
                            </p>
                            <p>
                                2<sup>⭐</sup>
                            </p>
                            <p>
                                3<sup>⭐</sup>
                            </p>
                            <p>
                                4<sup>⭐</sup>
                            </p>
                            <p>
                                5<sup>⭐</sup>
                            </p>
                        </div>
                        <div className="slider">
                            <input
                                type="range"
                                className="slider"
                                min={0}
                                max={4}
                                valuerange
                            />
                        </div>
                    </div>

                    <div className="subtitle">Brand</div>
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                id="option1"
                                name="option1"
                            />
                            <label htmlFor="option1">Nike</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="option2"
                                name="option2"
                            />
                            <label htmlFor="option2">Adidas</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="option3"
                                name="option3"
                            />
                            <label htmlFor="option3">Puma</label>
                        </li>
                        <li>
                            {" "}
                            <input
                                type="checkbox"
                                id="option4"
                                name="option4"
                            />
                            <label htmlFor="option4">Vans</label>
                        </li>
                    </ul>
                </section>

                <section className="content__bar">
                    <div className="path">Products &gt; Men</div>
                    <div className="sort">
                        <select>
                            <option>Price: High to Low</option>
                            <option>Price: Low to High</option>
                            <option>Customer Rating</option>
                        </select>
                    </div>
                </section>

                <section className="content">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            title={product.title}
                            image={product.img}
                            details={product.details}
                            rating={product.rating}
                            price={product.price}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Products;
