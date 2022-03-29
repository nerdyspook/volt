import React from "react";
import "./CategoryItem.scss";

const CategoryItem = ({ item }) => {
    return (
        <div className="category_item_container">
            <div className="gradient"></div>
            <img src={item.img} alt={item.title} />
            <div className="info">
                <h1 className="title">{item.title}</h1>
                <button>Shop Now</button>
            </div>
        </div>
    );
};

export default CategoryItem;
