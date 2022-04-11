import axios from "axios";

export const removeWishlist = async (id, dispatchCart) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/wishlist/${id}`,
            headers: {
                authorization: token,
            },
        });
        if (response.status === 200) {
            dispatchCart({
                type: "ADD_TO_WISHLIST",
                payload: response.data.wishlist,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
