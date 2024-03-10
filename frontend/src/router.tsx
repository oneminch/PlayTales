import Account from "@/pages/Account";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import LogIn from "@/pages/LogIn";
import NotFound from "@/pages/NotFound";
import Product from "@/pages/Product";
import ProtectedPage from "@/pages/ProtectedPage";
import Root from "@/pages/Root";
import Search from "@/pages/Search";
import SignUp from "@/pages/SignUp";
import ToS from "@/pages/ToS";
import Wishlist from "@/pages/Wishlist";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultPageLayout from "./layout/DefaultPageLayout";
import AuthPageLayout from "./layout/AuthPageLayout";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "account",
        element: (
          <ProtectedPage>
            <DefaultPageLayout title="Your Account">
              <Account />
            </DefaultPageLayout>
          </ProtectedPage>
        )
      },
      {
        path: "cart",
        element: (
          <DefaultPageLayout title="Your Cart">
            <Cart />
          </DefaultPageLayout>
        )
      },
      {
        path: "checkout",
        element: (
          <ProtectedPage>
            <DefaultPageLayout title="Checkout">
              <Checkout />
            </DefaultPageLayout>
          </ProtectedPage>
        )
      },
      {
        index: true,
        element: (
          <Layout title="Browse" className="space-y-4">
            <Home />
          </Layout>
        )
      },
      {
        path: "login",
        element: (
          <AuthPageLayout title="Log In">
            <LogIn />
          </AuthPageLayout>
        )
      },
      {
        path: "search",
        element: (
          <DefaultPageLayout title="Search">
            <Home />
          </DefaultPageLayout>
        )
      },
      {
        path: "search/:searchQuery",
        element: <Search />
      },
      {
        path: "signup",
        element: (
          <AuthPageLayout title="Sign Up">
            <SignUp />
          </AuthPageLayout>
        )
      },
      {
        path: "wishlist",
        element: (
          <DefaultPageLayout title="Your Wishlist">
            <Wishlist />
          </DefaultPageLayout>
        )
      },
      {
        path: "products/:productId",
        element: <Product />
      },
      {
        path: "terms-of-service",
        element: (
          <DefaultPageLayout title="Terms of Service">
            <ToS />
          </DefaultPageLayout>
        )
      }
    ]
  }
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
