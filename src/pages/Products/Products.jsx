import React, { useState } from "react";

import { products } from "../../fakeData";
import "./Products.scss";
import Product from "../../components/Product/Product";
import { useFilter } from "../../contexts/FilterContext";
import { getFilteredProducts } from "../../utilities/filter";

const Products = () => {
    const [selectedSort, setSelectedSort] = useState("Select an option");

    const { state, dispatch } = useFilter();
    const { gender, rating, brands } = state;
    const { nike, adidas, puma, vans } = brands;

    const filteredProducts = getFilteredProducts(products, state);

    return (
        <div className="container">
            <div className="head">Products</div>
            <main className="main">
                <section className="sidebar">
                    <div className="title">
                        Filter{" "}
                        <button
                            onClick={(e) => {
                                dispatch({ type: "CLEAR" });
                            }}
                        >
                            Clear all
                        </button>
                    </div>
                    <div className="subtitle">Gender</div>
                    <ul>
                        <li>
                            <input
                                type="radio"
                                id="men"
                                name="gender"
                                value="men"
                                checked={gender === "MEN"}
                                onChange={() => {
                                    dispatch({
                                        type: "MEN",
                                    });
                                }}
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
                                checked={gender === "WOMEN"}
                                onChange={() => {
                                    dispatch({
                                        type: "WOMEN",
                                    });
                                }}
                            />
                            <label htmlFor="women">Women</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                id="kids"
                                name="gender"
                                value="kids"
                                checked={gender === "KIDS"}
                                onChange={() => {
                                    dispatch({
                                        type: "KIDS",
                                    });
                                }}
                            />
                            <label htmlFor="kids">Kids</label>
                        </li>
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
                                min={1}
                                max={5}
                                value={rating}
                                onChange={(e) => {
                                    dispatch({
                                        type: "RATING",
                                        rating_value: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <div className="subtitle">Brand</div>
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                id="option1"
                                name="nike"
                                checked={nike}
                                onChange={() => {
                                    dispatch({ type: "NIKE" });
                                }}
                            />
                            <label htmlFor="option1">Nike</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="option2"
                                name="adidas"
                                checked={adidas}
                                onChange={() => {
                                    dispatch({ type: "ADIDAS" });
                                }}
                            />
                            <label htmlFor="option2">Adidas</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="option3"
                                name="puma"
                                checked={puma}
                                onChange={() => {
                                    dispatch({ type: "PUMA" });
                                }}
                            />
                            <label htmlFor="option3">Puma</label>
                        </li>
                        <li>
                            {" "}
                            <input
                                type="checkbox"
                                id="option4"
                                name="vans"
                                checked={vans}
                                onChange={() => {
                                    dispatch({ type: "VANS" });
                                }}
                            />
                            <label htmlFor="option4">Vans</label>
                        </li>
                    </ul>
                </section>

                <section className="content__bar">
                    <div className="path">Sort by</div>
                    <div className="sort">
                        <select
                            value={selectedSort}
                            onChange={(e) => {
                                setSelectedSort(e.target.value);
                                dispatch({ type: e.target.value });
                            }}
                        >
                            <option>Please select an option</option>
                            <option value="HIGH_TO_LOW">
                                Price: High to Low
                            </option>
                            <option value="LOW_TO_HIGH">
                                Price: Low to High
                            </option>
                        </select>
                    </div>
                </section>

                <section className="content">
                    {filteredProducts.map((product) => (
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
