import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducers/CartReducer";
import { loadWishlist } from "../utilities/load-wishlist";
import { loadCart } from "../utilities/load-cart";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    useEffect(() => {
        loadWishlist(dispatchCart);
        loadCart(dispatchCart);
    }, []);

    const [stateCart, dispatchCart] = useReducer(cartReducer, {
        myWishlist: [],
        myCart: [],
        quantity: 0,
    });

    return (
        <CartContext.Provider value={{ stateCart, dispatchCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
