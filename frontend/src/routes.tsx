import Account from "@/pages/Account";
import Cart from "@/pages/Cart.tsx";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home.tsx";
import LogIn from "@/pages/LogIn.tsx";
import NotFound from "@/pages/NotFound.tsx";
import Game from "@/pages/Game";
import Root from "@/pages/Root.tsx";
import Search from "@/pages/Search.tsx";
import SignUp from "@/pages/SignUp.tsx";
import ToS from "@/pages/ToS";
import Wishlist from "@/pages/Wishlist.tsx";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "account",
        element: <Account />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <LogIn />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "wishlist",
        element: <Wishlist />
      },
      {
        path: "games/:gameId",
        element: <Game />
      },
      {
        path: "terms-of-service",
        element: <ToS />
      }
    ]
  }
]);

export default router;
