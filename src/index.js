import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { FilterProvider } from "./contexts/FilterContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <FilterProvider>
                <App />
            </FilterProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
