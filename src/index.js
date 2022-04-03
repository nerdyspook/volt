import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FilterProvider } from "./contexts/FilterContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <FilterProvider>
            <App />
        </FilterProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
