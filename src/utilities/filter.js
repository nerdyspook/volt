import { getProductsForGender } from "../utilities/gender";
import { getRatedProducts } from "../utilities/rating";
import { getBrandedProducts } from "../utilities/brand";
import { getSortedProducts } from "../utilities/sort";

export const getFilteredProducts = (products, state) => {
    const { sortBy, gender, rating, brands } = state;
    const { nike, adidas, puma, vans } = brands;

    const productsForGender = getProductsForGender(products, gender);

    const ratedProducts = getRatedProducts(productsForGender, rating);

    const brandedProducts = getBrandedProducts(
        ratedProducts,
        nike,
        adidas,
        puma,
        vans
    );

    const sortedProducts = getSortedProducts(brandedProducts, sortBy);

    return sortedProducts;
};
