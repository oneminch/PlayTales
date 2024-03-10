import type { CartContext, CartPrice, Product } from "@/types";

const getCartCount = (products: CartContext["products"]): number => {
  return Object.keys(products).length;
};

const getCartTotalPrice = (products: CartContext["products"]): CartPrice => {
  return Object.values(products).reduce(
    (acc: CartPrice, product: Product) => {
      const orignalPrice = acc.totalOriginalPrice + product.price;
      const discountedPrice =
        acc.totalDiscountedPrice + (1 - product.discount / 100) * product.price;

      acc.totalOriginalPrice = parseFloat(orignalPrice.toFixed(2));
      acc.totalDiscountedPrice = parseFloat(discountedPrice.toFixed(2));

      return acc;
    },
    { totalOriginalPrice: 0, totalDiscountedPrice: 0 }
  );
};

export { getCartCount, getCartTotalPrice };
