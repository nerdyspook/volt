import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "LOW_TO_HIGH":
            return { ...state, sortBy: action.type };
        case "HIGH_TO_LOW":
            return { ...state, sortBy: action.type };

        case "MEN":
            return { ...state, gender: action.type };
        case "WOMEN":
            return { ...state, gender: action.type };
        case "KIDS":
            return { ...state, gender: action.type };

        case "RATING":
            return { ...state, rating: action.rating_value };

        case "NIKE":
            return {
                ...state,
                brands: {
                    ...state["brands"],
                    nike: !state.brands.nike,
                },
            };
        case "ADIDAS":
            return {
                ...state,
                brands: {
                    ...state["brands"],
                    adidas: !state.brands.adidas,
                },
            };
        case "PUMA":
            return {
                ...state,
                brands: {
                    ...state["brands"],
                    puma: !state.brands.puma,
                },
            };
        case "VANS":
            return {
                ...state,
                brands: {
                    ...state["brands"],
                    vans: !state.brands.vans,
                },
            };

        case "CLEAR":
            return {
                sortBy: "",
                gender: "",
                rating: 1,
                brands: {
                    nike: false,
                    adidas: false,
                    puma: false,
                    vans: false,
                },
            };

        default:
            return state;
    }
};

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        sortBy: "",
        gender: "",
        rating: 1,
        brands: { nike: false, adidas: false, puma: false, vans: false },
    });

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
