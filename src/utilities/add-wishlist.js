import axios from "axios";

export const addWishlist = async (product, dispatchCart) => {
    const newToken = localStorage.getItem("token");
    try {
        const response = await axios({
            method: "POST",
            url: "/api/user/wishlist",
            data: { product: product },
            headers: {
                authorization: newToken,
            },
        });

        if (response.status === 201) {
            dispatchCart({
                type: "ADD_TO_WISHLIST",
                payload: response.data.wishlist,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
