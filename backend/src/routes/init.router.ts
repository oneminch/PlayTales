import { Router } from "express";
import { generateInitialData } from "../controllers/init.controller";

const initRouter = Router();

initRouter.post("/", generateInitialData);

export default initRouter;
