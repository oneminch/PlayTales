import { toast } from "sonner";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import type { CartContext, ChildrenNodes, Product } from "@/types";
import { getCartCount, getCartTotalPrice } from "@/utils/get-cart-info";

const initialCartContext: CartContext = {
  products: {},
  count: 0,
  totalPrice: {
    totalOriginalPrice: 0,
    totalDiscountedPrice: 0
  },
  toggleProductCartStatus: (_product) => {},
  getProductCartStatus: (_productId) => false,
  clearCart: () => undefined
};

const CartCtx = createContext<CartContext>(initialCartContext);

export const CartProvider = ({ children }: ChildrenNodes) => {
  const { products, count, totalPrice } = initialCartContext;

  const [cartProducts, setCartProducts] = useLocalStorage<
    Record<string, Product>
  >({ key: "cart-context", defaultValue: products });
  const [cartCount, setCartCount] = useState<number>(count);
  const [cartTotalPrice, setCartTotalPrice] = useState(totalPrice);

  useEffect(() => {
    const currentCount = getCartCount(cartProducts);
    const currentTotalPrice = getCartTotalPrice(cartProducts);

    setCartCount(currentCount);
    setCartTotalPrice(currentTotalPrice);
  }, [cartProducts]);

  const toggleProductCartStatus = (product: Product) => {
    if (cartProducts[product.id]) {
      const updatedCart = { ...cartProducts };
      delete updatedCart[product.id];
      setCartProducts(updatedCart);
      toast.success("Item Removed from Cart");
    } else {
      const updatedCart = { ...cartProducts, [product.id]: product };
      setCartProducts(updatedCart);
      toast.success("Item Added to Cart");
    }
  };

  const getProductCartStatus = (productId: string) => {
    return !!cartProducts[productId];
  };

  const clearCart = () => {
    setCartProducts(products);
  };

  return (
    <CartCtx.Provider
      value={{
        products: cartProducts,
        count: cartCount,
        totalPrice: cartTotalPrice,
        toggleProductCartStatus,
        getProductCartStatus,
        clearCart
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export const useCartContext = () => useContext(CartCtx);
