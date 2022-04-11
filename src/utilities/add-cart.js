import axios from "axios";

export const addCart = async (product, dispatchCart) => {
    const newToken = localStorage.getItem("token");
    try {
        const response = await axios({
            method: "POST",
            url: "/api/user/cart",
            data: { product },
            headers: {
                authorization: newToken,
            },
        });

        if (response.status === 201) {
            dispatchCart({ type: "ADD_TO_CART", payload: response.data.cart });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
