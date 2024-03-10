import { Toaster } from "sonner";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import { AuthProvider } from "@/context/auth-context";
import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context";
import { ThemeProvider } from "@/context/theme-context";
import { UserProvider } from "@/context/user-context";

import { Outlet, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import {
  QueryClient,
  QueryClientProvider,
  QueryKey
} from "@tanstack/react-query";

const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  try {
    const res = await fetch(`/api${queryKey[0]}`, {
      method: "GET",
      credentials: "include"
    });
    return await res.json();
  } catch (err) {
    return err;
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      placeholderData: { products: [], count: 0 }
    }
  }
});

const Root = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <CartProvider>
              <UserProvider>
                <WishlistProvider>
                  <div className="flex flex-col min-h-screen space-y-4">
                    <Header />
                    <main className="grow">
                      <Toaster position="bottom-center" />

                      <Outlet />
                    </main>
                    <Footer />
                  </div>
                </WishlistProvider>
              </UserProvider>
            </CartProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Root;
