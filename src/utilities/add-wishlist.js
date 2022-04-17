import axios from "axios";
import { notifyAddWishlist, notifyWishlistError } from "./notifications";

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
            notifyAddWishlist();
            dispatchCart({
                type: "ADD_TO_WISHLIST",
                payload: response.data.wishlist,
            });
        }
    } catch (e) {
        notifyWishlistError();
        console.log("Error: ", e);
    }
};
