import React, { useState } from "react";
import "./QuantityCounter.scss";

const QuantityCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="quantity__counter">
            <button
                className="decrement"
                onClick={() => setCount((prevCount) => prevCount - 1)}
            >
                -
            </button>
            <div className="quantity__count">{count}</div>
            <button
                className="increment"
                onClick={() => setCount((prevCount) => prevCount + 1)}
            >
                +
            </button>
        </div>
    );
};

export default QuantityCounter;
