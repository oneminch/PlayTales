import { toast } from "sonner";
import { createContext, useContext, useEffect, useState } from "react";
import type { ChildrenNodes, Product, WishlistContext } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useMutate from "@/hooks/use-mutate";
import { useAuthContext } from "./auth-context";
import { useNavigate } from "react-router-dom";

const initialWishlistContext: WishlistContext = {
  wishlist: [],
  count: 0,
  getProductWishlistStatus: (_productId: string) => ({
    isProductWishlisted: false,
    wishlistAction: ""
  }),
  toggleProductWishlistStatus: (_productId: string) => {}
};

export const wishlistQueryKey = "/user/wishlist";

export const WishlistCtx = createContext(initialWishlistContext);

export const WishlistProvider = ({ children }: ChildrenNodes) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuthContext();

  const response = useQuery<any>({
    queryKey: [wishlistQueryKey],
    placeholderData: { wishlist: [] },
    enabled: !!isLoggedIn
  });

  const { mutateAsync } = useMutate(wishlistQueryKey, queryClient);

  const [wishlist, setWishlist] = useState<Product[]>(
    () => initialWishlistContext.wishlist
  );
  const [wishlistCount, setWishlistCount] = useState(
    () => initialWishlistContext.count
  );

  useEffect(() => {
    if (response.data.wishlist) {
      setWishlist(response.data.wishlist);
    } else {
      setWishlist([]);
    }
  }, [response.data]);

  useEffect(() => {
    setWishlistCount(wishlist.length);
  }, [wishlist]);

  useEffect(() => {
    queryClient.resetQueries({ queryKey: [wishlistQueryKey] });
    if (!isLoggedIn) {
      setWishlist([]);
    }
  }, [isLoggedIn]);

  const getProductWishlistStatus = (productId: string) => {
    const wishlistStatus = wishlist
      .map((product) => product.id)
      .includes(productId);

    return {
      isProductWishlisted: wishlistStatus,
      wishlistAction: wishlistStatus
        ? "Remove from Wishlist"
        : "Add to Wishlist"
    };
  };

  const toggleProductWishlistStatus = (productId: string) => {
    if (!isLoggedIn) {
      toast.error("Log In or Sign Up to Wishlist Items.", {
        action: {
          label: "Log In",
          onClick: () => navigate("/login")
        }
      });
    } else {
      mutateAsync({
        productId: productId
      })
        .then((data) => {
          toast.success(data.message, {
            action: {
              label: "View Wishlist",
              onClick: () => navigate("/wishlist")
            }
          });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const value = {
    wishlist,
    count: wishlistCount,
    getProductWishlistStatus,
    toggleProductWishlistStatus
  };

  return <WishlistCtx.Provider value={value}>{children}</WishlistCtx.Provider>;
};

export const useWishlistContext = () => useContext(WishlistCtx);
