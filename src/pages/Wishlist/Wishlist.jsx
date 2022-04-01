import React from "react";
import { products } from "../../fakeData";
import Product from "../../components/Product/Product";

import "./Wishlist.scss";

const Wishlist = () => {
    return (
        <div className="wishlist_container">
            <div className="head">Wishlist</div>
            <div className="items">
                Total Number of items: {products.length}
            </div>
            <div className="content">
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
            </div>
        </div>
    );
};

export default Wishlist;
