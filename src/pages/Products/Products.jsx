import React from "react";

import { products } from "../../fakeData";
import "./Products.scss";
import Product from "../../components/Product/Product";

const Products = () => {
    const brands = ["Nike", "Adidas", "Puma", "Vans"];
    const genders = ["Men", "Women", "Kids"];

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
                        {genders.map((gender, index) => (
                            <li key={index}>
                                <input
                                    type="radio"
                                    id={`${gender.toLowerCase()}`}
                                    name="gender"
                                    value={`${gender.toLowerCase()}`}
                                />
                                <label htmlFor={`${gender.toLowerCase()}`}>
                                    {gender}
                                </label>
                            </li>
                        ))}
                    </ul>

                    <div className="subtitle">Rating</div>
                    <div className="price_range">
                        <div className="range">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <p key={item}>
                                    {item}
                                    <sup>⭐</sup>
                                </p>
                            ))}
                        </div>
                        <div className="slider">
                            <input
                                type="range"
                                className="slider"
                                min={0}
                                max={4}
                            />
                        </div>
                    </div>

                    <div className="subtitle">Brand</div>
                    <ul>
                        {brands.map((brand, index) => (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    id={`option${index + 1}`}
                                    name={`option${index + 1}`}
                                />
                                <label htmlFor={`option${index + 1}`}>
                                    {brand}
                                </label>
                            </li>
                        ))}
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
