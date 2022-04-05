import React, { useEffect, useState } from "react";
import { products } from "../../fakeData";
import Product from "../../components/Product/Product";
import axios from "axios";
import "./Wishlist.scss";

const Wishlist = () => {
    const [wish, setWish] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/api/products`);
                if (response.status === 200) {
                    const products = response.data.products;

                    setWish([...products]);
                }
            } catch (e) {
                console.log("error: ", e);
            }
        })();
    }, []);

    return (
        <div className="wishlist_container">
            <div className="head">Wishlist</div>
            <div className="items">Total Number of items: {wish.length}</div>
            <div className="content">
                {wish.map((product) => (
                    <Product
                        key={product.id}
                        title={product.title}
                        image={product.img}
                        details={product.details}
                        rating={product.rating}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
