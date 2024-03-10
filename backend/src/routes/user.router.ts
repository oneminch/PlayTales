import { Router } from "express";
import {
  wishlistProduct,
  orderProducts,
  getWishlist,
  getUserInfo
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/order", orderProducts);

userRouter.get("/wishlist", getWishlist);

userRouter.post("/wishlist", wishlistProduct);

userRouter.get("/account", getUserInfo);

export default userRouter;
