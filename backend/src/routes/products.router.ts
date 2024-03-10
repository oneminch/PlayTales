import { Router } from "express";
import {
  getAllProducts,
  getSingleProduct
} from "../controllers/products.controller";

const productsRouter = Router();

productsRouter.get("/", getAllProducts);

productsRouter.get("/:productId", getSingleProduct);

export default productsRouter;
