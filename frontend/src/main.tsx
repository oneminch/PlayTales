import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

import About from "./pages/About.tsx";
import Cart from "./pages/Cart.tsx";
import Home from "./pages/Home.tsx";
import LogIn from "./pages/LogIn.tsx";
import NotFound from "./pages/NotFound.tsx";
import Product from "./pages/Product.tsx";
import Root from "./pages/Root.tsx";
import SignUp from "./pages/SignUp.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "cart",
        element: <Cart />
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
        path: "signup",
        element: <SignUp />
      },
      {
        path: "products/:productId",
        element: <Product />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
