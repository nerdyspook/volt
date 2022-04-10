import axios from "axios";

export const addWishlist = async (product, dispatchCart) => {
    console.log(product);
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
        console.log(response);
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
