import { ReactNode } from "react";

interface ChildrenNodes {
  children: React.ReactNode;
}

interface Product {
  id: string;
  title: string;
  description: string;
  discount: number;
  price: number;
  ratings: number[];
  genre: string[];
  poster: string;
  screenshots: string[];
  releaseDate: string;
  platform: string;
  developer: string;
  publisher: string;
}

interface FilterOptions {
  label: string;
  options: { label: string; value: string }[];
}

interface ProductPrice {
  price: number;
  discount: number;
}

interface LayoutProps {
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

interface CartPrice {
  totalOriginalPrice: number;
  totalDiscountedPrice: number;
}

interface AuthContext {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

interface CartContext {
  products: Record<string, Product>;
  count: number;
  totalPrice: CartPrice;
  toggleProductCartStatus: (product: Product) => void;
  getProductCartStatus: (productId: string) => boolean;
  clearCart: () => void;
}

interface ThemeContext {
  theme: string;
  toggleTheme: () => void;
}

interface UserContext {
  userInfo: Record<string, any> | null;
  userOrders: Record<string, any> | null;
  submitOrder: (productIds: string[], callback: () => any) => void;
}

interface WishlistContext {
  wishlist: Product[];
  count: number;
  getProductWishlistStatus: (productId: string) => {
    isProductWishlisted: boolean;
    wishlistAction: string;
  };
  toggleProductWishlistStatus: (productId: string) => void;
}

export type {
  AuthContext,
  CartContext,
  CartPrice,
  ChildrenNodes,
  FilterOptions,
  LayoutProps,
  Product,
  ProductPrice,
  ThemeContext,
  UserContext,
  WishlistContext
};
