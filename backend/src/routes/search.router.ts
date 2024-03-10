import { Router } from "express";
import { searchProducts } from "../controllers/search.controller";

const searchRouter = Router();

searchRouter.get("/:searchQuery", searchProducts);

export default searchRouter;
